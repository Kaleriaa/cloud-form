import { FieldsName } from '@shared/constants'
import { RADIO_GROUP } from '../constants'
import { GroupName, Label, RadioWrapper, Wrapper } from './styled'
import { useFormContext } from 'react-hook-form'

export const RadioGroup = () => {
    const { register } = useFormContext()
    return (
        <Wrapper>
            <GroupName>Radio group</GroupName>
            {RADIO_GROUP.map(({ value, id }) => {
                return (
                    <RadioWrapper key={id}>
                        <input
                            {...register(FieldsName.RADIO)}
                            type="radio"
                            key={id}
                            name={FieldsName.RADIO}
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
