import { InputStyles } from '@shared/ui'
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
export const InputEmail = styled.input`
    width: 400px;
    ${InputStyles};
    @media (max-width: 495px) {
        width: 85%;
    }
`
export const InputPhone = styled(MaskedInput)`
    ${InputStyles};
    @media (max-width: 495px) {
        width: 85%;
    }
`
