import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";


export default function Navbar(){
    const router = useRouter();
    useEffect(() => {
        console.log(router.asPath);
    },[])
    const [menuicon,setmenuicon] = useState(false);
    return (
        <>
        <div className="nav flex justify-between fixed h-[100px] items-center w-full px-28 py-5 bg-[#000] shadow-2xl">
            <div className="logo text-[30px]">
                <h2 className="text-[#fff]"><span className="text-[#7456FF]">Amine</span > Ajdahim</h2>
            </div>

            <nav className={` ${styles.navbar} list-none flex justify-around hidden md:block`}>
                <div className="navic list-none flex justify-around ">
                    <li className="px-6 text-[23px]" style={{color:router.asPath === '/#' ? "#7456FF" : "#fff"}}>
                        <Link href={"/#"}>Home</Link>
                    </li>
                    <li className="px-6 text-[23px]" style={{color:router.asPath === '/#about' ? "#7456FF" : "#fff"}}>
                        <Link href={"/#about"}>About</Link>
                    </li>
                    <li className="px-6 text-[23px]" style={{color:router.asPath === '/#project' ? "#7456FF" : "#fff"}}>
                        <Link href={"/#project"}>Project</Link>
                    </li>
                    <li className="px-6 text-[23px]" style={{color:router.asPath === '/#Blog' ? "#7456FF" : "#fff"}}>
                        <Link href={"/#Blog"}>Blog</Link>
                    </li>
                    <li className={`px-6 text-[23px] text-[#7456FF] ${styles.contacts}`}>
                        <Link href={"/"}>Contact Me</Link>
                    </li>

                </div>
            </nav>
            {/* <div className="samurai ">
                    <AiOutlineMenu color={"#fff"} width={35} height={35} size={25}/>
            </div> */}

        </div>
        </>
    );
}