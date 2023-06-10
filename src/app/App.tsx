import { Modal, FirstStep, SecondStep, ThirdStep } from '@widgets'
import { MainPage, FormPage } from '@pages'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { BASE_PATH } from '@shared/constants'
import { Provider } from 'react-redux'
import {
    CSSReset,
    ColorModeProvider,
    ThemeProvider,
    theme,
} from '@chakra-ui/react'
import { store } from '@shared/store'

//TODO: redirect on first step
export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ColorModeProvider>
                    <CSSReset />
                    <Modal />
                    <Routes>
                        <Route path={BASE_PATH} element={<Outlet />}>
                            <Route index element={<MainPage />} />
                            <Route
                                path="form"
                                element={<Navigate to="step1" />}
                            />
                            <Route path="form" element={<FormPage />}>
                                <Route path="step1" element={<FirstStep />} />
                                <Route path="step2" element={<SecondStep />} />
                                <Route path="step3" element={<ThirdStep />} />
                            </Route>
                        </Route>
                    </Routes>
                </ColorModeProvider>
            </ThemeProvider>
        </Provider>
    )
}
