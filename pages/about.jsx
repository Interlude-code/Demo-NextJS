import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const about = () => {
  return (
    <div className={styles.container}>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ir a <Link href="/">Inicio!</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
        </p>
      </main>
    </div>
  )
}

export default about