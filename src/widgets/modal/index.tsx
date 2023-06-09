import React from 'react'
import ReactDOM from 'react-dom'
import { Overlay, Title, Window } from './styled'
import { Success } from './success'
import { Error } from './error'

export const Modal = () => {
    const [isVisible, setIsVisible] = React.useState(false)
    return (
        <div>
            {isVisible &&
                ReactDOM.createPortal(
                    <Overlay>
                        <Success />
                        {/* <Error /> */}
                    </Overlay>,
                    document.body,
                )}
        </div>
    )
}
