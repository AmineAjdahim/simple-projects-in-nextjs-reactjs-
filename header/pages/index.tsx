import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="body h-screen bg-slate-800 flex justify-center items-center">
    <div className={`flex w-[300px] h-[300px] justify-center items-center bg-slate-600 text-[70px] ${styles.box}`}>
      <h2 className={``}>02</h2>
   </div>
   </div>
  )
}

export default Home
