import { yupResolver } from '@hookform/resolvers/yup'
import { FieldsName } from '@shared/constants'
import { InputLabel } from '@shared/ui'
import { Controller, useForm } from 'react-hook-form'
import { phoneMask } from '../constants'
import { schemaMain } from './schema'
import { InputEmail, InputPhone, InputWrapper, MainFormWrapper } from './styled'

export const MainForm = () => {
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schemaMain),
    })

    return (
        <MainFormWrapper onSubmit={handleSubmit(console.log)}>
            <InputWrapper>
                <Controller
                    name={FieldsName.PHONE}
                    defaultValue="+7 988-947-14-05"
                    control={control}
                    render={({ field }) => (
                        <>
                            <InputLabel label="Номер телефона" />
                            <InputPhone
                                mask={phoneMask}
                                disabled
                                showMask
                                {...field}
                            />
                        </>
                    )}
                />
            </InputWrapper>
            <InputWrapper>
                <Controller
                    name={FieldsName.EMAIL}
                    defaultValue="kalerriia@gmail.com"
                    control={control}
                    render={({ field }) => (
                        <>
                            <InputLabel label="Email" />
                            <InputEmail disabled {...field} />
                        </>
                    )}
                />
            </InputWrapper>
        </MainFormWrapper>
    )
}
