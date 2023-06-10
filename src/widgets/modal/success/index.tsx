import { Title, Window } from '../styled'
import { ButtonUI } from '@shared/ui'
import SuccessSVG from './success.svg'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BASE_PATH, FieldsId } from '@shared/constants'
import { ModalStates } from '..'

export const Success = ({ onClose }: ModalStates) => {
    const navigate = useNavigate()
    const toMainPage = () => {
        onClose()
        navigate(`${BASE_PATH}/`)
    }

    return (
        <SuccessWindow>
            <Title>Форма успешно отправлена</Title>
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
