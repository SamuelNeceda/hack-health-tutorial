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
            <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16"/>
        </Head>
    ),
    faviconGlyph: '👨🏼‍💻',
    logo: (
        <>
            <img src="/logoMain.png" alt="HackHealth tutorial" height="24" width="24" style={{marginRight: "0.4em"}}/>
            <span>HackHealth tutorial</span>
        </>
    ),
    project: {
        link: 'https://git.kpi.fei.tuke.sk/kpi-zp/2023/bp.samuel.neceda/hackHealth',
        icon: <svg width="24" height="24" viewBox="0 0 256 256">
            <path fill="currentColor"
                  d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"></path>
        </svg>,
    },
    chat: {
         icon: <svg width="24" height="24" viewBox="0 0 248 204"></svg>,
    },
    docsRepositoryBase: 'https://github.com/SamuelNeceda/hack-health-tutorial',
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: 'HH tutorial - %s'
            }
        }
    },
    sidebar: {
        titleComponent({title}) {
            if (title === 'Cybersecurity') {
                return <>🕵🏼‍♂️ {title}</>
            }
            if (title === 'A01:2021 - Broken Access Control') {
                return <>❕ {title}</>
            }
            if (title === 'Introduction') {
                return <>👋 {title}</>
            }
            if (title === 'Initial Setup') {
                return <>🛠 {title}</>
            }
            if (title === 'Web App Setup') {
                return <>🚀 {title}</>
            }
            return <>◽️ {title}</>
        }
    },
    feedback: {
        content: 'Questions or Suggestions?',
    },
    editLink: {
        text: '',
    },
    gitTimestamp: false,
    footer: {
        text:
            <span>
      MIT {new Date().getFullYear()} © <a href="https://nextra.site" target="_blank">Powered by Nextra template</a>.<br/> Build with ♡ by Samuel Nečeda
    </span>,
    },
}

export default config
