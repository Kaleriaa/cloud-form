import { FormWrapperSteps, Input, InputLabel, Tip } from '@shared/ui'
import { Select } from 'chakra-react-select'
import { useFormContext, Controller } from 'react-hook-form'
import styled from 'styled-components'
import { inputsStep1, selectStyleConfig, sexFields } from './constants'

export const FirstStep = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext()

    return (
        <FormWrapperSteps>
            {inputsStep1.map(({ id, label, name }) => {
                return (
                    <Wrapper key={id}>
                        <InputLabel label={label} />
                        <Controller
                            name={name}
                            control={control}
                            render={({ field }) => <Input id={id} {...field} />}
                        />
                        <Tip
                            isError={!errors[name]}
                            tip={name}
                            error={errors[name]?.message as string}
                        />
                    </Wrapper>
                )
            })}
            <SelectWrapper>
                <InputLabel label="Sex" />
                <Controller
                    name="sex"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            id="field-sex"
                            useBasicStyles
                            chakraStyles={selectStyleConfig}
                            options={sexFields}
                            placeholder="Не выбрано"
                            isSearchable={false}
                        />
                    )}
                />
            </SelectWrapper>
        </FormWrapperSteps>
    )
}
const Wrapper = styled(FormWrapperSteps)`
    gap: 8px;
`
const SelectWrapper = styled(Wrapper)`
    margin-bottom: 22px;
`
