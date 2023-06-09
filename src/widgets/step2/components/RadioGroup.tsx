import React from 'react'
import { radioGroup } from '../constants'
import { GroupName, Label, RadioWrapper, Wrapper } from './styled'
import { useFormContext } from 'react-hook-form'
import { SchemaFieldStep2 } from '../schema'

export const RadioGroup = () => {
    const { register } = useFormContext()
    return (
        <Wrapper>
            <GroupName>Radio group</GroupName>
            {radioGroup.map(({ value, id }) => {
                return (
                    <RadioWrapper key={id}>
                        <input
                            {...register(SchemaFieldStep2.RADIO)}
                            type="radio"
                            key={id}
                            name="radio"
                            id={id}
                            value={value}
                        />
                        <Label htmlFor={value}>{value}</Label>
                    </RadioWrapper>
                )
            })}
        </Wrapper>
    )
}
