import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Loader from '../components/Loader'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Fireblog</h1>
      <Link href="/robinlifshitz"> Link to User Posts </Link>

      <Loader show />
    </div>
  )
}
