import styles from "../styles/Profile.module.css"
import { MdOutlineContactPage } from "react-icons/md";
import Rectangle from "../styles/Rectangle2.png"
import prifleimg from "../styles/profile.png"
import Image from "next/image";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";



export default function Profile() {
    return (
        <>
        <div id="home" className="page flex justify-center w-full h-full ">
        <div className="pro flex flex-row-reverse flex-wrap sm:pt-[100px] h-[800px] w-full px-[8%] justify-between items-center pt-[200px] md:justify-center" >
             <div className="profilimg text-[#fff]  flex flex-col relative top-0 items-center justify-center  right-0 md:w-[50%] sm:w-[600px] ">
                <div className="imgg relative top-0 right-0">
                    <img src={Rectangle.src}  />
                    <img src={prifleimg.src} className={` absolute top-[-60px] duration-150 delay-150 hover:translate-x-2`} />

                </div>
                <div className="social w-full text-[#fff] flex justify-end ">
                    <h3>Find Me On</h3>

                    <button className={`${styles.buttons} mx-3 rounded-full w-[24px] flex justify-center items-center `}>
                        <a href="#" className="">
                            <GrFacebookOption color="#7456FF"/>
                        </a>
                    </button>
                    <button className={`${styles.buttons} mx-3 rounded-full w-[24px] flex justify-center items-center `}>
                        <a href="#" className="">
                            <AiFillInstagram color="#7456FF"/>
                        </a>
                    </button>
                    <button className={`${styles.buttons} mx-3 rounded-full w-[24px] flex justify-center items-center `}>
                        <a href="#" className="">
                            <BsWhatsapp color="#7456FF"/>
                        </a>
                    </button>
                    <button className={`${styles.buttons} mx-3 rounded-full w-[24px] flex justify-center items-center `}>
                        <a href="#" className="text-[#7456FF]">
                            <FaLinkedinIn />
                        </a>
                    </button>
                </div>
            </div>
            <div className="allinfo  md:w-[50%] sm:w-[600px] pt-8 ">
                    <p className="text-[24px] text-[#fff]">Hello Buds</p>
                    <br />
                    <h2 className="text-[24px] text-[#fff] font-semibold">I am 
                        <span className="text-[#7456FF]  px-2">
                             Amine Ajdahim
                        </span>
                        <p>______</p>
                        <p className="font-light text-[15px] w-[350px] flex flex-wrap">
                        I'm a person who has a keen interest in the design layout.
                        I think presenting an attractive design is a matter of concern in
                        developing a branding of products. To creates a good design, 
                        I focus on proper composition and visual decoration details in 
                        order to make it more professional. For the time being, I’m 
                        developing the skill for acquiring the UI/UX design for dynamic 
                        application and web development.
                        </p>
                    </h2>
                    <div className="btns my-7 flex  ">
                        <button className="text-[#fff] mr-3 text-[15px] w-[130px] bg-[#7456FF] p-2 rounded-[4px]">
                            <a href="#" className="flex  h-full  items-center">
                            <MdOutlineContactPage size={18} style={{marginRight:"2px"}}/>
                            Download CV
                            </a>
                            </button>
                        <button className="text-[#fff] text-[15px] w-[130px] bg-none  border p-2 rounded-[4px]">more</button>
                    </div>
            </div>
        </div>
        </div>
        </>
    );
}