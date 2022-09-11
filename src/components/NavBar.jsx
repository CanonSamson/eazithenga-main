//img imports
import logo from '../asset/icon_svg/logo.png'

//components
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

//icons for mui
import { MdClose, MdMenu } from "react-icons/md";


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
                    <div onClick={Toggler} className="text-orange">
                        <MdMenu size={24} />
                    </div>

                </div>
                <div className={`${toggle ? "flex top-0 h-[320px]" : "flex top-[-1000px] h-[10px]"} duration-300 fixed right-0 w-[70%] z-50 bg-white p-5 rounded-br-xl shadow-xl h-screen`}>
                    <div onClick={Toggler}>
                        <MdClose size={24} />
                    </div>
                    <div className=' flex flex-col justify-center m-auto items-center'>
                        <HashLink onClick={Toggler} smooth to="#features" className=' my-5'>Features</HashLink>

                        <HashLink onClick={Toggler} smooth to="#contactus" className=' my-5'>Contact</HashLink>

                        <HashLink onClick={Toggler} smooth to="#contactus" className=' my-5'>Pricing</HashLink>

                        <HashLink onClick={Toggler} smooth to="#contactus" className=' my-5'>Home</HashLink>
                        <Link to="/" className='  justify-center  mt-5 flex  bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black px-4 py-2 text-sm  border-orange sm:p-3 sm:px-10 mr-2' >
                            <button >Get Started</button>
                        </Link>
                    </div>
                </div>
                <div onClick={Toggler} className={`${toggle ? "flex" : "hidden"} w-full h-[100%] z-30 bg-black/30 blur-sm fixed top-0 left-0`}></div>
            </nav>





            <div className=' hidden Btablet:block'>
                <nav className='flex h-[70px] justify-between items-center py-3 px-5  fixed top-0 left-0 w-[100%] shadow-xl z-50 bg-white'>
                    <img className=' w-32' src={logo} alt="logo" />
                    <div className=' flex  items-center  justify-between text-blue'>
                        <HashLink className="mx-4" smooth to="#features" >Home</HashLink>
                        <HashLink className="mx-4" smooth to="#features" >Contact</HashLink>
                        <HashLink className="mx-4" smooth to="#features" >Pricing</HashLink>
                        <HashLink className="mx-4" smooth to="#features" >Features</HashLink>

                        <Link to="/" className='  justify-center w-[160px]  flex  bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black p-4 text-sm rounded-r-xl  border-orange sm:p-3 sm:px-10 mr-2' >
                            <button >Sign Up</button>
                        </Link>

                    </div>
                </nav>
            </div>

        </div>
    );
}






export default NavBar;