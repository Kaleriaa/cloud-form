import React from 'react'
import styled, { css } from 'styled-components'

type InputProps = {
    type?: string
    placeholder?: string
    value?: string
    disabled?: boolean
    id?: string
    className?: string
    onChange: () => void
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return (
            <InputWrapper
                id={props.id}
                ref={ref}
                className={props.className}
                value={props.value ?? ''}
                placeholder={props.placeholder ?? 'Placeholder'}
                type={props.type ?? 'text'}
                disabled={props.disabled ?? false}
                onChange={props.onChange}
            />
        )
    },
)

export const InputStyles = css`
    outline: none;
    border: 1px solid var(--black-alpha16);
    background-color: #ffffff;
    color: var(--primary-text);
    border-radius: 4px;
    padding: 12px;
    font-size: 14px;
    width: 300px;
    height: 44px;
    &::placeholder {
        color: var(--black-alpha48);
    }
    &:disabled {
        background-color: var(--black-alpha4);
        color: var(--black-alpha48);
    }
`

const InputWrapper = styled.input`
    ${InputStyles};
    @media (max-width: 495px) {
        width: 85%;
    }
`
