import React from 'react'
import styled from 'styled-components'
import { Title, Window } from '../styled'
import Close from './close.svg'
import ErrorSVG from './error.svg'
import { ButtonUI } from '@shared/ui'
import { FieldsId } from '@shared/constants'

export const Error = () => {
    return (
        <Window>
            <Header>
                <Title>Ошибка</Title>
                <img src={Close} />
            </Header>
            <Image src={ErrorSVG} height={80} width={80} />
            <CloseButton label="Закрыть" id={FieldsId.CLOSE} />
        </Window>
    )
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Image = styled.img`
    align-self: center;
`
const CloseButton = styled(ButtonUI)`
    align-self: flex-end;
`
