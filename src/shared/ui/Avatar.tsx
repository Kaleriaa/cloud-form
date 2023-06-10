import styled from 'styled-components'

type AvatarProps = Record<'initials', string>

export const Avatar = ({ initials }: AvatarProps) => {
    return <Block>{initials}</Block>
}

const Block = styled.div`
    background-color: var(--blue-avatar);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    font-weight: 400;
    font-size: 40px;
    color: #212830;
    display: grid;
    place-content: center;
`
