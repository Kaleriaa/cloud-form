import { Avatar, SocialLink } from '@shared/ui'
import React from 'react'
import { Info, Links, Name, PersonalInfoWrapper } from '../styled'
import { socialLinks } from '../constants'

export const PersonalInfo = () => {
    return (
        <PersonalInfoWrapper>
            <Avatar initials="КБ" />
            <Info>
                <Name>Беляева Калерия</Name>
                <Links>
                    {socialLinks.map(({ label, link }) => (
                        <SocialLink key={label} label={label} link={link} />
                    ))}
                </Links>
            </Info>
        </PersonalInfoWrapper>
    )
}
