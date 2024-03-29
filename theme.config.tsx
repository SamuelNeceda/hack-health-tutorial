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
        link: 'https://git.kpi.fei.tuke.sk/hackhealth',
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
            if (title === 'a01' || title === 'injections') {
                return <>❕ {title}</>
            }
            if (title === 'About') {
                return <>ℹ️ {title}</>
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
            if (title === 'Final Words') {
                return <>🏆 {title}</>
            }
            if (title === 'Tools') {
                return <>🛡️ {title}</>
            }
            if (title === 'Static Code Analysis') {
                return <>📝 {title}</>
            }
            if (title === 'Database') {
                return <>💾 {title}</>
            }
            if (title === 'Virtual Machine') {
                return <>💻 {title}</>
            }
            if (title === 'Repository') {
                return <>🐙 {title}</>
            }
            if (title === 'Intro') {
                return <>📖 {title}</>
            }
            if (title === 'First things first') {
                return <>🏁 {title}</>
            }
            if (title === 'A01 Broken Access Control' || title === 'A02 Cryptographic Failures' || title === 'A03 Injection'|| title === 'A04 Insecure Design'|| title === 'A05 Security Misconfiguration'|| title === 'A06 Vulnerable and Outdated Components'|| title === 'A07 Identification and Authentication Failures' || title === 'A08 Software and Data Integrity Failures' || title === 'A09 Security Logging and Monitoring Failures' || title === 'A10 Server-Side Request Forgery' ) {
                return <>❕ {title}</>;
            }
            if (title === '0 Init' || title === '1. Server' || title === '2. Routes'|| title === '3. JWT Generator'|| title === '4. Middleware'|| title === '5. Private Routes' || title === "Init") {
                return <>🖥️ {title}</>;
            }
            if (title === '6. Client' || title === '7. React Router' || title === '8. Components' || title === '9. JWT Validation') {
                return <>🎨 {title}</>
            }
            return <>◽ {title}</>
        },
        defaultMenuCollapseLevel: 1,
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
