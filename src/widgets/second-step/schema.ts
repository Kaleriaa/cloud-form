import { FieldsName } from '@shared/constants'
import * as yup from 'yup'

export const SECOND_STEP_SCHEMA = yup
    .object({
        [FieldsName.ADVANTAGES]: yup.array().of(
            yup
                .object()
                .shape({
                    value: yup.string().required(),
                })
                .required('Advantages is required'),
        ),
        [FieldsName.CHECKBOX]: yup
            .array()
            .of(yup.number().required())
            .min(1)
            .required(),
        [FieldsName.RADIO]: yup.string().required('An option is required'),
    })
    .required()
