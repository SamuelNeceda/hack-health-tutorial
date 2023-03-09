import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import {useRouter} from 'next/router'
import Head from 'next/head'

const config: DocsThemeConfig = {
    head: (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content="HackHealth tutorial"/>
            <meta property="og:description" content="Tutorial for the HackHealth app"/>
            <link rel="icon" href="/public/favicon.png" type="image/png"/>
        </Head>
    ),
    logo: <span>HackHealth tutorial</span>,
    project: {
        link: 'https://github.com/shuding/nextra-docs-template',
    },
    chat: {
        link: 'https://discord.com',
    },
    docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
    footer: {
        text: '© 2023 Samuel Neceda. All Rights Reserved.',
    },
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: 'HH tutorial - %s'
            }
        }
    }
}

export default config
