import { FieldsId } from '@shared/constants'
import { ButtonUI } from '@shared/ui'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ModalStates } from '..'
import { Title, Window } from '../styled'
import SuccessSVG from './success.svg'

export const Success = ({ onClose, message }: ModalStates) => {
    const navigate = useNavigate()
    const toMainPage = () => {
        onClose()
        navigate('/')
    }

    return (
        <SuccessWindow>
            <Title>{message ?? 'Успешно'}</Title>
            <img src={SuccessSVG} />
            <ButtonUI
                label="На главную"
                onClick={toMainPage}
                id={FieldsId.TO_MAIN}
            />
        </SuccessWindow>
    )
}

const SuccessWindow = styled(Window)`
    align-items: center;
`
