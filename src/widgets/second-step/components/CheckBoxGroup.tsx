import React from 'react'
import { checkBoxGroup } from '../constants'
import { CheckBoxWrapper, GroupName, Label, Wrapper } from './styled'
import { useFormContext } from 'react-hook-form'
import { SchemaFieldStep2 } from '../schema'

export const CheckBoxGroup = () => {
    const { register } = useFormContext()
    return (
        <Wrapper>
            <GroupName>CheckBox group</GroupName>
            {checkBoxGroup.map(({ value, id }) => {
                return (
                    <CheckBoxWrapper key={id}>
                        <input
                            {...register(SchemaFieldStep2.CHECKBOX)}
                            type="checkbox"
                            key={id}
                            name="checkbox"
                            id={id}
                            value={value}
                        />
                        <Label htmlFor={value}>{value}</Label>
                    </CheckBoxWrapper>
                )
            })}
        </Wrapper>
    )
}
