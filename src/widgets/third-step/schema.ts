import * as yup from 'yup'

export const THIRD_STEP_SCHEMA = yup
    .object({
        about: yup.string().max(200).required('Обязательно для заполнения'),
    })
    .required()
