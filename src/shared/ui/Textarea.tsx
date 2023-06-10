import React from 'react'
import styled from 'styled-components'

type TextAreaProps = {
    id: string
    name?: string
    onChange: () => void
    value?: string
}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ name, id, onChange, value }, ref) => {
        const [symbolCount, setSymbolCount] = React.useState(0)
        const onCountSymbol: React.ChangeEventHandler<HTMLTextAreaElement> = (
            e,
        ) => {
            setSymbolCount(e.target.value.length)
        }
        return (
            <TextAreaWrapper>
                <Area
                    name={name}
                    maxLength={200}
                    rows={4}
                    value={value ?? ''}
                    onChange={onChange}
                    id={id}
                    ref={ref}
                    placeholder="Placeholder"
                    onInput={onCountSymbol}
                />
                <Counter>{symbolCount}</Counter>
            </TextAreaWrapper>
        )
    },
)

const TextAreaWrapper = styled.div`
    width: 100%;
    position: relative;
`

const Area = styled.textarea`
    outline: none;
    width: 100%;
    border: 1px solid var(--black-alpha16);
    border-radius: 4px;
    padding: 12px;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: var(--primary-text);
`

const Counter = styled.span`
    position: absolute;
    bottom: 5px;
    right: 12px;
    color: var(--black-alpha48);
    font-size: 14px;
`
