import { ButtonUI } from '@shared/ui'
import styled from 'styled-components'

export const MainFrame = styled.div`
    width: 900px;
    height: 704px;
    max-height: 95%;
    background: #ffffff;
    border-radius: 12px;
    padding: 25px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 920px) {
        width: 90%;
        height: 90%;
    }

    @media (max-width: 426px) {
        height: 100dvh;
        max-height: 100dvh;
        width: 100%;
        padding: 50px 30px;
    }
`

export const PersonalInfoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 24px;
    align-items: center;
    height: fit-content;

    @media (max-width: 391px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const Info = styled.div``

export const Name = styled.h1`
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    @media (max-width: 391px) {
        text-align: center;
    }
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
    @media (max-width: 426px) {
        align-self: center;
    }
`
