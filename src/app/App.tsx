import { Modal, FirstStep, SecondStep, ThirdStep } from '@widgets'
import { MainPage, FormPage } from '@pages'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { BASE_PATH } from '@shared/constants'
import {
    CSSReset,
    ColorModeProvider,
    ThemeProvider,
    theme,
} from '@chakra-ui/react'

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
                <CSSReset />
                <Modal />
                <Routes>
                    <Route path={BASE_PATH} element={<Outlet />}>
                        <Route index element={<MainPage />} />
                        <Route path="form" element={<Navigate to="step1" />} />
                        <Route path="form" element={<FormPage />}>
                            <Route path="step1" element={<FirstStep />} />
                            <Route path="step2" element={<SecondStep />} />
                            <Route path="step3" element={<ThirdStep />} />
                        </Route>
                    </Route>
                </Routes>
            </ColorModeProvider>
        </ThemeProvider>
    )
}
