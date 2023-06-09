import React from 'react'
import { FormWrapperSteps, Input, InputLabel } from '@shared/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaMain } from '../schema'
import { Controller, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { styled } from 'styled-components'
import { FieldsId, FieldsName } from '@shared/constants'
import { Button } from '@chakra-ui/react'

export const MainForm = () => {
    const { handleSubmit, control } = useForm({
        resolver: yupResolver(schemaMain),
    })
    const onSubmit = (data: any) => console.log(data)
    return (
        <MainFormWrapper onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
                <Controller
                    name={FieldsName.PHONE}
                    defaultValue="+7 988-947-14-05"
                    control={control}
                    render={({ field }) => (
                        <>
                            <InputLabel label="Номер телефона" />
                            <InputPhone mask="+7 (999) 999-99-99" {...field} />
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
                            <Input id={FieldsId.EMAIL} {...field} />
                        </>
                    )}
                />
            </InputWrapper>
        </MainFormWrapper>
    )
}
const MainFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const InputPhone = styled(InputMask)`
    outline: none;
    border: 1px solid var(--black-alpha16);
    background-color: #ffffff;
    color: var(--primary-text);
    border-radius: 4px;
    padding: 12px;
    font-size: 14px;
    width: 300px;
    height: 44px;
    &::placeholder {
        color: var(--black-alpha48);
    }
    &:disabled {
        background-color: var(--black-alpha4);
        color: var(--black-alpha48);
    }
`
