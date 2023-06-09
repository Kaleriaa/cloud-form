import React from 'react'
import { Title, Window } from '../styled'
import { ButtonUI } from '@shared/ui'
import SuccessSVG from './success.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BASE_PATH, FieldsId } from '@shared/constants'

export const Success = () => {
    return (
        <SuccessWindow>
            <Title>Форма успешно отправлена</Title>
            <img src={SuccessSVG} />
            <Link to={`${BASE_PATH}/`}>
                <ButtonUI label="На главную" id={FieldsId.TOMAIN} />
            </Link>
        </SuccessWindow>
    )
}
const SuccessWindow = styled(Window)`
    align-items: center;
`
