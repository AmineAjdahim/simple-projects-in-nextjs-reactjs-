import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
const Home: NextPage = () => {
  return (
   <div className={`${styles.contain} h-screen w-full `}>
    <Navbar/>
   </div>
  )
}

export default Home
