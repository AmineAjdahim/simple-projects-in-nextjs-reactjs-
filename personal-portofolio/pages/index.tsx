import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Offers from '../components/offoers'
const Home: NextPage = () => {
  return (
   <div className={`${styles.contain} w-full relative `}>
    <Navbar/>
    <Profile/>
    <Offers/>
   </div>
  )
}

export default Home
