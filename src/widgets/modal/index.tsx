import ReactDOM from 'react-dom'
import { Overlay } from './styled'
import { Success } from './success'
import { Error } from './error'
import { useAppDispatch, useAppSelector } from '@shared/store'
import { closeModal } from '@entities/modal/slice'

export type ModalStates = {
    onClose: () => void
    message?: string
}

export const Modal = () => {
    const dispatch = useAppDispatch()
    const { isVisible, isSuccess, message } = useAppSelector(
        (state) => state.modal,
    )

    const onClose = () => {
        dispatch(closeModal())
    }

    if (!isVisible) return null

    return ReactDOM.createPortal(
        <Overlay>
            {isSuccess ? (
                <Success onClose={onClose} message={message} />
            ) : (
                <Error onClose={onClose} message={message} />
            )}
        </Overlay>,
        document.body,
    )
}
