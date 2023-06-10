import { FieldsName } from '@shared/constants'
import { CHECKBOX_GROUP } from '../constants'
import { CheckBoxWrapper, GroupName, Label, Wrapper } from './styled'
import { useFormContext } from 'react-hook-form'

export const CheckBoxGroup = () => {
    const { register } = useFormContext()
    return (
        <Wrapper>
            <GroupName>CheckBox group</GroupName>
            {CHECKBOX_GROUP.map(({ value, id }) => {
                return (
                    <CheckBoxWrapper key={id}>
                        <input
                            {...register(FieldsName.CHECKBOX)}
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
