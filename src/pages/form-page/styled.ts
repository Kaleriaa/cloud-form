import { Button as BtnChakra } from '@chakra-ui/react'
import { ButtonUI } from '@shared/ui'
import styled from 'styled-components'

export const Layout = styled.form`
    width: 900px;
    height: fit-content;
    max-height: calc(100vh - 5%);
    background: #ffffff;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 4.125em;
    padding: 62px 110px 80px 110px;
    @media (max-width: 678px) {
        padding: 42px 80px 60px 80px;
    }
    @media (max-width: 480px) {
        padding: 42px 55px 30px 55x;
        max-height: 100%;
        height: 100vh;
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
    @media (max-width: 480px) {
        margin-top: 15px;
    }
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-height: 85%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 5px;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.05);
    }
`
export const SubmitButton = styled(BtnChakra)`
    &:hover {
        filter: darken(92%);
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
