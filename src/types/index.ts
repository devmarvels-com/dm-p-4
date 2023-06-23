export type FormInput = {
    type: 'text' | 'radio' | 'select' | 'checkbox' | 'textarea' | 'submit';
    fieldType?: 'text' | 'number'
    name: string
    value: string | number
    placeholder?: string
    label?: string
    options?: SelectOpt[],
    depConditionsTrueIf?: 'all' |  'any'
    conditionalLogic?: ConditionalLogic[]
}

export type SelectOpt = {
    text: string
    val: string | number
}

export type ConditionalLogic = {
    depFieldName: string
    depFieldValue: string | number
    depConditionsTrueIf?: 'any' | 'all',
    depFieldValueCondition: '>' | '<' | '>=' | '<=' | '=' | '!=' | 'NotEmpty'
    andGroup?: ConditionalLogic[]
}