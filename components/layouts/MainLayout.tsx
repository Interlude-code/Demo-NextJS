import Head from 'next/head'
import styles from './MainLayout.module.css'
import Navbar from '../navbar.js/Navbar'
import { FC } from 'react'

const MainLayout : FC = ({children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>OE</title>
        <meta name="about" content="contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
  
      <main className={styles.main}>
        {children}
      </main>

      
    </div>
  )
}

export default MainLayout