// import Link from "next/link";
import {Link} from "react-scroll"
import styles from "../styles/Navbar.module.css"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineMenu,AiOutlineAlignRight } from "react-icons/ai";


export default function Navbar(){
    const router = useRouter();
    useEffect(() => {
        console.log(router.asPath);
    },[])
    const [menuicon,setmenuicon] = useState(false);
    return (
        <>
        <div className="nav flex justify-between fixed h-[100px] items-center w-full px-20 py-5 bg-[#000] shadow-2xl">
            <div className="logo text-[30px]">
                <h2 className="text-[#fff]"><span className="text-[#7456FF]">Amine</span > Ajdahim</h2>
            </div>
            <nav className={` ${styles.navbar} list-none  justify-around flex`}>
                <div className={`navic list-none justify-around lg:flex `} >
                    <li className="px-6 text-[20px]" style={{color:router.asPath === '/#' ? "#7456FF" : "#fff",cursor: "pointer"}}>
                        {/* <Link  href={"#home"} className={`scroll-smooth `}>Home</Link> */}
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500} delay={25}>Home</Link>
                    </li>
                    <li className="px-6 text-[20px]" style={{color:router.asPath === '/#about' ? "#7456FF" : "#fff",cursor: "pointer"}}>
                        {/* <Link href={"/#about"}>About</Link> */}
                        <Link to="about"  spy={true} smooth={true} offset={50} duration={500} delay={25}>About</Link>
                    </li>
                    <li className="px-6 text-[20px]" style={{color:router.asPath === '/#project' ? "#7456FF" : "#fff",cursor: "pointer"}}>
                        <Link href={"/#project"}>Project</Link>
                    </li>
                    <li className="px-6 text-[20px]" style={{color:router.asPath === '/#Blog' ? "#7456FF" : "#fff",cursor: "pointer"}}>
                        <Link href={"/#Blog"}>Blog</Link>
                    </li>
                    <li className={`px-6 text-[20px] text-[#7456FF] ${styles.contacts}`}>
                        <Link href={"/"}>Contact Me</Link>
                    </li>
                </div>
            </nav>
            <div className="samurai lg:hidden sm:flex md:flex " onClick={(() => setmenuicon(!menuicon))}>
                {menuicon ? <><AiOutlineAlignRight color={"#fff"} width={35} style={{}} height={35} size={25} /> 
                      <div className={`${styles.navli} ${menuicon ? "w-[430px] h-screen top-[100px] right-0 absolute bg-[#7456FF] duration-500 delay-300 transition-all": ""} `}>
                        <nav className=" list-none flex justify-center flex-col relative items-center my-6 ">
                            <li className="px-6 my-6  text-[23px]" style={{color: "#fff"}}>
                              <Link href={"/#"}>Home</Link>
                          </li>
                          <li className="px-6 my-6 text-[23px]" style={{color: "#fff"}}>
                              <Link href={"/#about"}>About</Link>
                          </li>
                          <li className="px-6 my-6 text-[23px]" style={{color:"#fff"}}>
                              <Link href={"/#project"}>Project</Link>
                          </li>
                          <li className="px-6 my-6 text-[23px]" style={{color:"#fff"}}>
                              <Link href={"/#Blog"}>Blog</Link>
                          </li>
                          <li className={`px-6 my-6 text-[23px] text-[#fff] ${styles.contacts}`}>
                              <Link href={"/"}>Contact Me</Link>
                          </li>
                          </nav>
                      </div>
                      </>
                : <AiOutlineMenu color={"#fff"} width={35} height={35} size={25}/>}
              
            </div>

        </div>
        </>
    );
}