import type { ConditionalLogic } from "../types";

export const passesConditionalLogic = (rootFieldName: string, conditionalLogic: ConditionalLogic[] | undefined, logicTrueIf: 'all' | 'any' | undefined, watchList: Record<string, any>): boolean => {
    if (!conditionalLogic) {
        return true;
    }

    let andGroupMet = true;
    let res = true;
    let runningCond = true;
    const conditionType = logicTrueIf === 'any' ? 'any' : 'all';
    for (let i = 0; i < conditionalLogic.length; i += 1) {
        const condLogic = conditionalLogic[i];

        const fieldName = condLogic.depFieldName;
        const condOp = condLogic.depFieldValueCondition;
        const fieldValue = watchList[fieldName];
        const expectedValue = condLogic.depFieldValue;
        const andGroup = condLogic?.andGroup;

        // reset on each new condition, as we only need any condition to be true!
        if (conditionType === 'any') {
            andGroupMet = true;
        }

        res = evalConditionalLogic(fieldValue, condOp, expectedValue);

        if (andGroup) {
            // only set runningCond initially when there is a andGroup
            if (i === 0) {
                runningCond = false;
            }
            for (let andGroupLogic of andGroup) {
                const andFieldName = andGroupLogic.depFieldName;
                const andCondOp = andGroupLogic.depFieldValueCondition;
                const andFieldValue = watchList[andFieldName];
                const andExpectedValue = andGroupLogic.depFieldValue;
                andGroupMet = andGroupMet && evalConditionalLogic(andFieldValue, andCondOp, andExpectedValue);
                if (!andGroupMet) {
                    break;
                }
            }
        }

        if (conditionType === 'all') {
            runningCond = res && runningCond;
        } else if (conditionType === 'any') {
            if (andGroup) {
                runningCond = runningCond || (andGroupMet && res);
            } else {
                runningCond = res;
            }
            // if true, we found a condition that shows this field, no need to keep checking
            if (runningCond) {
                break;
            }
        }
    }
    return runningCond;
}

const evalConditionalLogic = (value: string, condOp: string, expectedValue: string | number): boolean => {
    let res;
    switch (condOp) {
        case 'NotEmpty':
            res = value?.length > 0;
            break;
        case '!=':
            res = value !== expectedValue;
            break;
        case '<':
            res = value < expectedValue;
            break;
        case '<=':
            res = value <= expectedValue;
            break;
        case '=':
            res = value === expectedValue;
            break;
        case '>':
            res = value > expectedValue;
            break;
        default:
            res = false;
    }
    return res;
}