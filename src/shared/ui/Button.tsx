import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
    label: string
    onClick?: () => void
    id: string
    className?: string
}

export const ButtonUI = ({ label, onClick, id, className }: ButtonProps) => {
    return (
        <Block className={className} id={id} onClick={onClick}>
            {label}
        </Block>
    )
}

const Block = styled.button`
    cursor: pointer;
    width: fit-content;
    background-color: var(--primary-color);
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 1px solid var(--primary-color);
    &:hover {
        filter: darken(92%);
    }
`
