import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
    isVisible: boolean
    isSuccess: boolean
    message: string
}

const initialState: ModalState = {
    isVisible: false,
    isSuccess: false,
    message: '',
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalState>) => {
            state.isVisible = action.payload.isVisible
            state.isSuccess = action.payload.isSuccess
            state.message = action.payload.message
        },
        closeModal: (state) => {
            state.isVisible = false
            state.isSuccess = false
            state.message = ''
        },
    },
})

export const { openModal, closeModal } = modalSlice.actions
