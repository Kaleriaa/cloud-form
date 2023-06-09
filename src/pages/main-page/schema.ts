import * as yup from 'yup'

export const schemaMain = yup
    .object({
        phone: yup
            .string()
            .matches(
                /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                'Неверный формат телефона',
            )
            .required('Телефон обязателен для заполнения'),
        email: yup
            .string()
            .email('Неверный формат email')
            .required('Email обязателен для заполнения'),
    })
    .required()
export type FormDataMain = yup.InferType<typeof schemaMain>
