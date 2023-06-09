import { ButtonUI } from '@shared/ui'
import styled from 'styled-components'

export const MainFrame = styled.div`
    width: 900px;
    height: 704px;
    background: #ffffff;
    border-radius: 12px;
    padding: 25px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 480px) {
        height: 100vh;
    }
`
export const PersonalInfoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 24px;
    align-items: center;
    height: fit-content;
`
export const Info = styled.div``
export const Name = styled.h1`
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
`
export const Links = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: center;
    gap: 17.6px;
`
export const Line = styled.span`
    border: 1px solid var(--black-alpha8);
`
export const MainButton = styled(ButtonUI)`
    margin-top: 24px;
`
