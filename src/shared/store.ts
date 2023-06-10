import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { formApi } from '@shared/api'
import { modalSlice } from '../entities/modal/slice'

export const store = configureStore({
    reducer: {
        [formApi.reducerPath]: formApi.reducer,
        modal: modalSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(formApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
