import React from 'react'
import styles from '../styles/Header.module.css'
import Head from 'next/head'


function Header() {
    return (
        <>
            <Head>
                <title>Edanra Challenge</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap" rel="stylesheet"></link>
            </Head>
            <div className={styles.Header} />
        </>
    )
}

export default Header
