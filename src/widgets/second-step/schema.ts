import * as yup from 'yup'

export const schemaStep2 = yup
    .object({
        advantages: yup.array().of(
            yup
                .object()
                .shape({
                    value: yup.string().required(),
                })
                .required('Advantages is required'),
        ),
        checkbox: yup.array().of(yup.number().required()).min(1).required(),
        radio: yup.string().required('An option is required'),
    })
    .required()

export enum SchemaFieldStep2 {
    ADVANTAGES = 'advantages',
    CHECKBOX = 'checkbox',
    RADIO = 'radio',
}
