import styled from 'styled-components'

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.16);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: grid;
    place-content: center;
`

export const Window = styled.div`
    width: 460px;
    height: 312px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
`
export const Title = styled.span`
    font-weight: 600;
    font-size: 20px;
`
