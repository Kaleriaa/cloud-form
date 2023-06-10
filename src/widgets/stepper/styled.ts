import { Step, StepSeparator, Stepper } from '@chakra-ui/react'
import { styled } from 'styled-components'

export const StepperWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const TitleWrapper = styled.div`
    width: calc(100% - 10px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    span {
        color: var(--primary-color);
        font-weight: 400;
        font-size: 14px;
    }
`

export const StepActive = styled.div`
    position: relative;
    width: 16px;
    cursor: pointer;
    height: 16px;
    background-color: var(--primary-color);
    border-radius: 50%;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3.2px;
        height: 3.2px;
        background-color: #ffffff;
        border-radius: 50%;
    }
`

export const StepIncomplete = styled.span`
    cursor: pointer;
    background-color: var(--grey-stepper);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    z-index: 10;
`

export const StepperTheme = styled(Stepper)`
    color: var(--grey-stepper);
`

export const StepSeparatopTheme = styled(StepSeparator)``

export const StepStyled = styled(Step)`
    gap: 0;
    div[data-status='complete'] {
        background: var(--primary-color);
    }
    div [data-status='active'] {
        background: var(--primary-color);
    }
    div[role='separator'] {
        height: 8px;
        margin-left: -2px;
        margin-right: -2px;
    }
    div[role='separator'][data-status='incomplete'] {
        background: var(--black-alpha8);
    }
    div[role='separator'][data-status='active'] {
        background: var(--black-alpha8);
    }
`
