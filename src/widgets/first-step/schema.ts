import * as yup from 'yup'

export const FIRST_STEP_SCHEMA = yup
    .object({
        nickname: yup
            .string()
            .max(30)
            .matches(
                /^[a-zA-Zа-яА-Я0-9]+$/,
                'Можно использовать только буквы и цифры',
            )
            .required('Обязательно для заполнения'),
        name: yup
            .string()
            .max(50)
            .matches(/^[a-zA-Zа-яА-Я]+$/, 'Должно содержать только буквы')
            .required('Обязательно для заполнения'),
        surname: yup
            .string()
            .max(50)
            .matches(/^[a-zA-Zа-яА-Я]+$/, 'Должно содержать только буквы')
            .required('Обязательно для заполнения'),
    })
    .required()
