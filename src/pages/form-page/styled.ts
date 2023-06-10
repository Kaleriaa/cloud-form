import { Button as BtnChakra } from '@chakra-ui/react'
import { ButtonUI } from '@shared/ui'
import styled from 'styled-components'

export const Layout = styled.form`
    width: 900px;
    height: fit-content;
    max-height: 95vh;
    background: #ffffff;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 4.125em;
    padding: 62px 110px 80px 110px;

    @media (max-width: 920px) {
        width: 90%;
        height: 90%;
    }

    @media (max-width: 678px) {
        padding: 42px 70px 60px 70px;
    }

    @media (max-width: 426px) {
        height: 100vh;
        max-height: 100vh;
        width: 100%;
        padding: 50px;
    }
`

export const BackButton = styled(ButtonUI)`
    color: var(--primary-color);
    background-color: #fff;
    border: 1px solid var(--primary-color);
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 495px) {
        margin-top: 15px;
    }
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-height: 85%;
    overflow-y: auto;
`

export const SubmitButton = styled(BtnChakra)`
    &:hover {
        filter: brightness(92%);
    }
`

export const BtnStyleConfig = {
    width: 'fit-content',
    backgroundColor: 'var(--primary-color)',
    height: '44px',
    color: '#fff',
    fontWeight: '400',
    fontSize: '14px',
    padding: '12px 16px',
    borderRadius: '4px',
    border: '1px solid rgba(85, 88, 250, 1)',
}
