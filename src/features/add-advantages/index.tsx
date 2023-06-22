import { Input, InputLabel } from '@shared/ui'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { AddButton, Row, Trash, WrapperAdvantages } from './styled'
import TrashSVG from './trash.svg'
import { FieldsId, FieldsName } from '@shared/constants'

type AdvantagesProps = {
    label: string
}

export const AddAdvantages = ({ label }: AdvantagesProps) => {
    const { control } = useFormContext()

    const { fields, append, remove } = useFieldArray({
        control,
        name: FieldsName.ADVANTAGES,
    })

    const handleRemove = (index: number) => () =>
        fields.length === 1 || remove(index)

    return (
        <WrapperAdvantages>
            <InputLabel label={label} />
            {fields.map(({ id }, index) => {
                return (
                    <Row key={id}>
                        <Controller
                            name={`advantages.${index}.value`}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    id={`field-advantages-${index + 1}`}
                                />
                            )}
                        />
                        <Trash
                            src={TrashSVG}
                            id={`button-remove-${index + 1}`}
                            onClick={handleRemove(index)}
                        />
                    </Row>
                )
            })}
            <AddButton
                label="+"
                id={FieldsId.ADD_INPUT}
                onClick={() => append(null)}
            />
        </WrapperAdvantages>
    )
}
