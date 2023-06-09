import { ButtonUI } from '@shared/ui'
import { styled } from 'styled-components'

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 18.5px;
`
export const WrapperAdvantages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const AddButton = styled(ButtonUI)`
    background-color: #fff;
    color: var(--primary-color);
    width: 44px;
    height: 44px;
    font-size: 22px;
    display: grid;
    place-content: center;
`
export const Trash = styled.img`
    cursor: pointer;
`
