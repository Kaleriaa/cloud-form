import { Input } from '@shared/ui'
import MaskedInput from 'react-text-mask'
import { styled } from 'styled-components'

export const MainFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const InputEmail = styled(Input)`
    width: 400px;
`
export const InputPhone = styled(MaskedInput)`
    outline: none;
    border: 1px solid var(--black-alpha16);
    background-color: #ffffff;
    color: var(--primary-text);
    border-radius: 4px;
    padding: 12px;
    font-size: 14px;
    width: 400px;
    height: 44px;
    &::placeholder {
        color: var(--black-alpha48);
    }
    &:disabled {
        background-color: var(--black-alpha4);
        color: var(--black-alpha48);
    }
`
