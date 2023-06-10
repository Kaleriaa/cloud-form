import styled from 'styled-components'

export const CheckBoxWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: baseline;
    input[type='checkbox'] {
        appearance: none;
        display: grid;
        place-content: center;
        width: 16px;
        height: 16px;
        border: 1.5px solid rgba(0, 0, 0, 0.24);
        border-radius: 4px;
    }
    input[type='checkbox']::before {
        content: '';
        width: 9px;
        height: 9px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 9px 9px rgba(85, 88, 250, 1);
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    input[type='checkbox']:checked::before {
        transform: scale(1);
    }
`

export const Label = styled.label`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--primary-text);
`

export const RadioWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: baseline;
    input[type='radio'] {
        appearance: none;
        display: grid;
        place-content: center;
        width: 16px;
        height: 16px;
        border: 1.5px solid rgba(0, 0, 0, 0.24);
        border-radius: 16px;
    }
    input[type='radio']::before {
        content: '';
        width: 9px;
        height: 9px;
        border-radius: 12px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 9px 9px var(--primary-color);
    }

    input[type='radio']:checked::before {
        transform: scale(1);
    }
`

export const GroupName = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: var(--primary-text);
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
`
