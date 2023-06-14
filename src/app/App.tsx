import { Modal, FirstStep, SecondStep, ThirdStep } from '@widgets'
import { MainPage, FormPage } from '@pages'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import {
    CSSReset,
    ColorModeProvider,
    ThemeProvider,
    theme,
} from '@chakra-ui/react'
import { store } from '@shared/store'

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ColorModeProvider>
                    <CSSReset />
                    <Modal />
                    <Routes>
                        <Route element={<Outlet />}>
                            <Route index element={<MainPage />} />
                            <Route
                                path="create"
                                element={<Navigate to="step1" />}
                            />
                            <Route path="create" element={<FormPage />}>
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
