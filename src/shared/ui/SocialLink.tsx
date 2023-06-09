import React from 'react'
import styled from 'styled-components'

type LinkProps = Record<'link' | 'label', string>

export const SocialLink = ({ link, label }: LinkProps) => {
    return (
        <Wrapper>
            <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.710016 1.96935L2.08181 0.524489C2.15733 0.444944 2.26221 0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045 5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999 6.76578 1.9999H12.4344C12.5405 1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001 2.8595 13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173 11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999 1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098 10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368 0.710016 1.96935Z"
                    fill="#CCCCCC"
                />
            </svg>
            <Link href={link} target="_blank">
                {label}
            </Link>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5.6px;
`
const Link = styled.a`
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 400;
    line-height: 20px;
    font-size: 12px;
`
