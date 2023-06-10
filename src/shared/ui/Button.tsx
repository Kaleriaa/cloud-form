import styled from 'styled-components'

type ButtonProps = {
    label: string
    onClick?: () => void
    id: string
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

export const ButtonUI = ({ label, type = 'button', ...rest }: ButtonProps) => {
    return (
        <Wrapper {...rest} type={type}>
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    cursor: pointer;
    width: fit-content;
    background-color: var(--primary-color);
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    padding: 12px 16px;
    height: 44px;
    border-radius: 4px;
    border: 1px solid var(--primary-color);
    &:hover {
        filter: brightness(115%);
    }
`
