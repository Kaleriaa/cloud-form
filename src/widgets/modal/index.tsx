import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import { Overlay } from './styled'
import { Success } from './success'
import { Error } from './error'
import { RootState } from '@shared/store'
import { useAppDispatch } from '@shared/store'
import { closeModal } from '@entities/modal/slice'

export type ModalStates = {
    onClose: () => void
}

export const Modal = () => {
    const dispatch = useAppDispatch()
    const { isVisible, isSuccess } = useSelector(
        (state: RootState) => state.modal,
    )

    const onClose = () => {
        dispatch(closeModal())
    }

    if (!isVisible) return null

    return ReactDOM.createPortal(
        <Overlay>
            {isSuccess ? (
                <Success onClose={onClose} />
            ) : (
                <Error onClose={onClose} />
            )}
        </Overlay>,
        document.body,
    )
}
