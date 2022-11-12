import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Loader from '../components/Loader'
import { toast, Toaster } from 'react-hot-toast'


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Fireblog</h1>
      
      <button onClick={() => toast.success('Hello Toast!')}>
        Toast Me
      </button>
      
    </div>
  )
}
