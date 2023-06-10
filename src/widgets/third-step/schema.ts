import { FieldsName } from '@shared/constants'
import * as yup from 'yup'

export const THIRD_STEP_SCHEMA = yup
    .object({
        [FieldsName.ABOUT]: yup
            .string()
            .max(200)
            .required('Обязательно для заполнения'),
    })
    .required()
