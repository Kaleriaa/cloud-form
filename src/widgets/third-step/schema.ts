import * as yup from 'yup'

export const schemaStep3 = yup
    .object({
        about: yup.string().max(200).required('Обязательно для заполнения'),
    })
    .required()
