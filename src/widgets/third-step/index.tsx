import { FieldsId, FieldsName } from '@shared/constants'
import { InputLabel, Textarea, Tip, FormWrapperSteps } from '@shared/ui'
import { Controller, useFormContext } from 'react-hook-form'
import { styled } from 'styled-components'

export const ThirdStep = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext()

    return (
        <FormWrapperStep3>
            <InputLabel label={FieldsName.ABOUT} />
            <Controller
                name={FieldsName.ABOUT}
                control={control}
                render={({ field }) => (
                    <Textarea id={FieldsId.ABOUT} {...field} />
                )}
            />
            <Tip
                tip={FieldsName.ABOUT}
                isError={!errors.about}
                error={errors.about?.message as string}
            />
        </FormWrapperStep3>
    )
}
const FormWrapperStep3 = styled(FormWrapperSteps)`
    gap: 8px;
`
