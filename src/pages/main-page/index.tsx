import { FieldsId, RoutePaths } from '@shared/constants'
import { Link } from 'react-router-dom'
import { MainForm } from './components/MainForm'
import { PersonalInfo } from './components/PersonalInfo'
import { Line, MainButton, MainFrame } from './styled'

export const MainPage = () => {
    return (
        <MainFrame>
            <PersonalInfo />
            <Line />
            <MainForm />
            <Link to={RoutePaths.STEP1}>
                <MainButton label="Начать" id={FieldsId.START} />
            </Link>
        </MainFrame>
    )
}
