import React from 'react'
import styled from 'styled-components'

export const InputLabel = ({ label }: Record<'label', string>) => {
    return <Label>{label}</Label>
}

const Label = styled.label`
    font-weight: 400;
    font-size: 14px;
`
