import { FormWrapperSteps, Input, InputLabel, Tip } from '@shared/ui'
import { Select } from 'chakra-react-select'
import { useFormContext, Controller } from 'react-hook-form'
import styled from 'styled-components'
import {
    FIRST_STEP_INPUTS,
    SELECT_STYLES_CONFIG,
    SEX_FIELDS,
} from './constants'
import { FieldsName } from '@shared/constants'

// У React Select нет нормальной возможности установить кастомный id для option'а
const Option = (option: { id: string; label: string }) => {
    return <div id={option.id}>{option.label}</div>
}

export const FirstStep = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext()

    return (
        <FormWrapperSteps>
            {FIRST_STEP_INPUTS.map(({ id, label, name }) => {
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
                    name={FieldsName.SEX}
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            inputId="field-sex"
                            useBasicStyles
                            // Типы для React Select описаны не совсем точно и getOptionLabel умеет возвращать ReactNode
                            getOptionLabel={Option as unknown as () => string}
                            chakraStyles={SELECT_STYLES_CONFIG}
                            options={SEX_FIELDS}
                            placeholder="Не выбрано"
                            isSearchable={false}
                            menuPortalTarget={document.body}
                        />
                    )}
                />
                <Tip
                    isError={!errors.sex}
                    tip={FieldsName.SEX}
                    error={errors.sex?.message as string}
                />
            </SelectWrapper>
        </FormWrapperSteps>
    )
}

const Wrapper = styled(FormWrapperSteps)`
    gap: 8px;
`

const SelectWrapper = styled(Wrapper)``
