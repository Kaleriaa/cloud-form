import { FieldsId, RoutePaths } from '@shared/constants'
import { useNavigate } from 'react-router-dom'
import { MainForm } from './components/MainForm'
import { PersonalInfo } from './components/PersonalInfo'
import { Line, MainButton, MainFrame } from './styled'

export const MainPage = () => {
    const navigate = useNavigate()

    return (
        <MainFrame>
            <PersonalInfo />
            <Line />
            <MainForm />
            <MainButton
                label="Начать"
                onClick={() => navigate(RoutePaths.STEP1)}
                id={FieldsId.START}
            />
        </MainFrame>
    )
}
