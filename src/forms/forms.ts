import type { FormInput } from "../types";

export const surveyForm: FormInput[] = [
    {
        type: 'radio',
        options: [{ text: 'Yes', val: 'yes'}, { text: 'No', val: 'no'} ],
        name: 'has-JS-Experience',
        value: '',
        label: 'Do you have experience with JavaScript?',
    },
    {
        type: 'text',
        fieldType: 'number',
        name: 'js-years-experience',
        value: '',
        label: 'Years of experience with JavaScript?',
        conditionalLogic: [
            {
                depFieldName: 'has-JS-Experience',
                depFieldValue: 'yes',
                depFieldValueCondition: '='
            },
        ]
    },
    {
        type: 'radio',
        options: [{ text: 'Yes', val: 'yes'}, { text: 'No', val: 'no'} ],
        name: 'know-react',
        value: '',
        label: 'Do you know React?',
        conditionalLogic: [
            {
                depFieldName: 'js-years-experience',
                depFieldValue: 2,
                depFieldValueCondition: '>'
            },
        ]
    },
    {
        type: 'radio',
        options: [{ text: 'Yes', val: 'yes'}, { text: 'No', val: 'no'} ],
        name: 'know-react-hook-form',
        value: '',
        label: 'Do you know React Hook Form?',
        conditionalLogic: [
            {
                depFieldName: 'know-react',
                depFieldValue: 'yes',
                depFieldValueCondition: '='
            },
        ]
    },
    {
        type: 'text',
        name: 'what-other-language',
        value: '',
        placeholder: 'Node.js, Go, Python',
        label: 'What other language do you know?',
        conditionalLogic: [
            {
                depFieldName: 'has-JS-Experience',
                depFieldValue: 'no',
                depFieldValueCondition: '='
            },
        ]
    },
    {
        type: 'text',
        name: 'what-is-your-name',
        value: '',
        label: 'What is your name?',
        depConditionsTrueIf: 'any',
        conditionalLogic: [
            {
                depFieldName: 'has-JS-Experience',
                depFieldValue: 'yes',
                depFieldValueCondition: '=',
                andGroup: [
                    {
                        depFieldName: 'js-years-experience',
                        depFieldValue: '',
                        depFieldValueCondition: 'NotEmpty'
                    },
                    {
                        depFieldName: 'know-react',
                        depFieldValue: '',
                        depFieldValueCondition: 'NotEmpty'
                    },
                    {
                        depFieldName: 'know-react-hook-form',
                        depFieldValue: '',
                        depFieldValueCondition: 'NotEmpty'
                    },

                ]
            },
            {
                depFieldName: 'has-JS-Experience',
                depFieldValue: 'no',
                depFieldValueCondition: '=',
                andGroup: [
                    {
                        depFieldName: 'what-other-language',
                        depFieldValue: '',
                        depFieldValueCondition: 'NotEmpty'                        
                    }
                ]                
            }
        ]
    },
    {
        type: 'text',
        name: 'what-is-your-phone',
        value: '',
        label: 'What is Your Phone?',
        conditionalLogic: [
            {
                depFieldName: 'what-is-your-name',
                depFieldValue: '',
                depFieldValueCondition: 'NotEmpty'
            },
        ]
    },
    {
        type: 'submit',
        name: 'submit-dev-survey',
        value: '',
        label: 'Submit Survey',
        depConditionsTrueIf: 'any',
        conditionalLogic: [
            {
                depFieldName: 'know-react',
                depFieldValue: 'no',
                depFieldValueCondition: '='
            },
            {
                depFieldName: 'what-is-your-phone',
                depFieldValue: '',
                depFieldValueCondition: 'NotEmpty'                
            }
        ]
    },
]