import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
    isVisible: boolean
    isSuccess: boolean
}

const initialState: ModalState = {
    isVisible: false,
    isSuccess: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalState>) => {
            state.isVisible = action.payload.isVisible
            state.isSuccess = action.payload.isSuccess
        },
        closeModal: (state) => {
            state.isVisible = false
            state.isSuccess = false
        },
    },
})

export const { openModal, closeModal } = modalSlice.actions
