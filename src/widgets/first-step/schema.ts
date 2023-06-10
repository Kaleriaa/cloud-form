import { FieldsName } from '@shared/constants'
import * as yup from 'yup'
import { SEX_FIELDS } from './constants'

export const FIRST_STEP_SCHEMA = yup
    .object({
        [FieldsName.NICKNAME]: yup
            .string()
            .max(30)
            .matches(
                /^[a-zA-Zа-яА-Я0-9]+$/,
                'Можно использовать только буквы и цифры',
            )
            .required('Обязательно для заполнения'),
        [FieldsName.NAME]: yup
            .string()
            .max(50)
            .matches(/^[a-zA-Zа-яА-Я]+$/, 'Должно содержать только буквы')
            .required('Обязательно для заполнения'),
        [FieldsName.SURNAME]: yup
            .string()
            .max(50)
            .matches(/^[a-zA-Zа-яА-Я]+$/, 'Должно содержать только буквы')
            .required('Обязательно для заполнения'),
        [FieldsName.SEX]: yup
            .object()
            .oneOf(SEX_FIELDS, 'Invalid selection')
            .required('Обязательно для выбора'),
    })
    .required()
