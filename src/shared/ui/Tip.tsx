import React from 'react'
import styled from 'styled-components'

type TipProps = { isError: boolean; tip: string; error: string | undefined }
export const Tip = ({ isError, tip, error }: TipProps) => {
    return (
        <>
            {isError ? (
                <HelperText>Заполните поле {tip}</HelperText>
            ) : (
                <ErrorMessage>{error}</ErrorMessage>
            )}
        </>
    )
}

const HelperText = styled.span`
    font-weight: 400;
    font-size: 12px;
    color: var(--black-alpha48);
`
const ErrorMessage = styled(HelperText)`
    color: red;
`
