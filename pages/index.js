import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reprehenderit esse quibusdam molestias fugiat voluptates sequi incidunt, omnis porro tempora iure totam iusto sunt ratione quisquam harum non illo blanditiis.</p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninjas</a>
      </Link>
    </div>
    </>
  )
}
