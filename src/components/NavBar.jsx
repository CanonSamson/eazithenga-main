//img imports
import logo from '../asset/icon_svg/logo.png'

//components
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

//icons for mui
import {MdClose, MdMenu} from "react-icons/md";


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const Toggler = () => {
        setToggle(!toggle)
    }

    return (
        <div className=' relative'>
            <nav id='nav' className='Btablet:hidden'>
                <div className='flex h-[60px]  justify-between items-center py-3 px-5  fixed top-0 left-0 w-[100%] shadow-xl z-50 bg-white'>
                    <img className=' w-32' src={logo} alt="logo" />
                    <div onClick={Toggler}>
                        <MdMenu size={24}  />
                    </div>

                </div>
                <div className={`${toggle ? "flex top-0 h-[320px]" : "flex top-[-1000px] h-[20px]"} duration-300 fixed right-0 w-full z-50 bg-white p-5 rounded-br-xl shadow-xl`}>
                    <div onClick={Toggler}>
                        <MdClose  size={24} />
                    </div>
                    <div className=' flex flex-col justify-center m-auto items-center'>
                        <ul className=' w-full '>
                            <li className=' my-7 border-b py-2 px-10 '>
                                <HashLink onClick={Toggler} smooth to="#features" ><span className=' text-orange'>01. </span>Features</HashLink>
                            </li>

                            <li className=' my-7 border-b py-2 px-10 '>
                                <HashLink onClick={Toggler} smooth to="#contactus" ><span className=' text-orange'>03. </span>Contact</HashLink>
                            </li>
                        </ul>
                        <Link to="/signup">
                            <button className='  active:opacity-70 active:shadow-2xl active:scale-105 text-black p-2 text-sm px-8 rounded border-2 border-orange '>Sign Up</button>
                        </Link>
                    </div>
                </div>
                <div onClick={Toggler} className={`${toggle ? "flex" : "hidden"} w-full h-[100%] z-30 bg-black/30 blur-sm fixed top-0 left-0`}></div>
            </nav>

            {/* for laptop srceen size */}
            <Laptop  Features={Toggler} Contact={Toggler} />
        </div>
    );
}



const Laptop = ({ Features, Contact }) => {

    return (
        <div className=' hidden Btablet:block'>
            <nav className='flex h-[70px] justify-between items-center py-3 px-5  fixed top-0 left-0 w-[100%] shadow-xl z-50 bg-white'>
                <img className=' w-32' src={logo} alt="logo" />
                <div className=' flex  items-center  justify-between '>

                    <HashLink onClick={Features}  className="mx-4" smooth to="#features" >
                        <span className=' text-orange'>01. </span>Features
                    </HashLink>
                    <HashLink onClick={Contact}  className="mx-4" smooth to="#contactus" >
                        <span className=' text-orange'>02. </span>Contact
                    </HashLink>

                    <Link to="/signup">
                        <button className='   active:opacity-70 active:shadow-2xl active:scale-105 text-black p-2 text-sm px-8 rounded border-2 border-orange '>Sign Up</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;