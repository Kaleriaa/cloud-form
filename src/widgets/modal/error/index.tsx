import React from 'react'
import styled from 'styled-components'
import { Title, Window } from '../styled'
import Close from './close.svg'
import ErrorSVG from './error.svg'
import { ButtonUI } from '@shared/ui'
import { FieldsId } from '@shared/constants'

export const Error = () => {
    return (
        <ErrorWindow>
            <Header>
                <Title>Ошибка</Title>
                <img src={Close} />
            </Header>
            <img src={ErrorSVG} height={80} width={80} />
            <ButtonUI label="Закрыть" id={FieldsId.CLOSE} />
        </ErrorWindow>
    )
}

const ErrorWindow = styled(Window)``
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
