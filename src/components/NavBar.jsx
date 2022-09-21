//img imports
import logo from '../asset/icon_svg/logo.png'

//components
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

//icons for mui
import { MdClose, MdMenu } from "react-icons/md";


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const Toggler = () => {
        setToggle(!toggle)
    }
    function NavLink({
        to,
        className,
        activeClassName,
        inActiveClassName,
        ...rest
    }) {

        let location = useLocation();
        let isActive = location.pathname === to;

        let allClassNames =
            className + (isActive ? ` ${activeClassName}` : `${inActiveClassName}`);
        return <HashLink className={allClassNames} to={to} {...rest} />
    }



    return (
        <div className=' relative'>
            <nav id='nav' className='Btablet:hidden'>
                <div className='flex h-[60px]  justify-between items-center py-3 px-5  fixed top-0 left-0 w-[100%] shadow-xl z-50 bg-white'>
                    <Link to="/" >
                        <img className=' w-32' src={logo} alt="logo" />
                    </Link>
                    <div onClick={Toggler} className="text-orange">
                        <MdMenu size={24} />
                    </div>
                </div>
                <div className={`${toggle ? "flex top-0 h-[320px]" : "flex top-[-1000%] h-[10px]"} duration-300 fixed right-0 w-[70%] z-50 bg-white p-5 rounded-br-xl shadow-xl h-screen`}>
                    <div className=' text-orange' onClick={Toggler}>
                        <MdClose size={24} />
                    </div>
                    <div className=' flex flex-col justify-center m-auto items-center '>
                        <NavLink onClick={Toggler} activeClassName="text-orange  " inActiveClassName="text-blue my-5" smooth to="/" className='my-5'>Home</NavLink>
                        <HashLink onClick={Toggler} smooth to="/#features" className=' my-5'>Features</HashLink>
                        <HashLink onClick={Toggler} smooth to="/#pricing" className=' my-5'>Pricing</HashLink>
                        <NavLink onClick={Toggler} activeClassName="text-orange" inActiveClassName="text-blue" smooth to="/contact" className=' my-5'>Contact</NavLink>
                        <HashLink onClick={Toggler} to="/signup" className='  justify-center  mt-5 flex  bg-orange text-white active:opacity-70 active:shadow-2xl
                     `active:bg-white font-semibold shadow-lg active:scale-105 active:text-black px-4 py-2 text-sm  border-orange sm:p-3 sm:px-10 mr-2' >
                            <button >Get Started</button>
                        </HashLink>
                    </div>
                </div>
                <div onClick={Toggler} className={`${toggle ? "flex" : "hidden"} w-full h-[100%] z-30 bg-black/30 blur-sm fixed top-0 left-0`}></div>
            </nav>

            {/* web view */}
            <div className=' hidden Btablet:block'>
                <nav className='flex h-[70px] justify-between items-center py-3 px-5  fixed top-0 left-0 w-[100%] shadow-xl z-50 bg-white'>
                    <Link to="/" >
                        <img className=' w-32' src={logo} alt="logo" />
                    </Link>
                    <div className=' flex  items-center  justify-between text-blue'>
                        <NavLink activeClassName="text-orange" inActiveClassName="text-blue mx-4" className="mx-4" smooth to="/" >Home</NavLink>
                        <NavLink activeClassName="text-orange" inActiveClassName="text-blue mx-4" className="mx-4" smooth to="/contact" >Contact</NavLink>
                        <NavLink activeClassName="text-orange" inActiveClassName="text-blue mx-4" className="mx-4" smooth to="/#pricing" >Pricing</NavLink>
                        <NavLink activeClassName="text-orange" inActiveClassName="text-blue mx-4" className="mx-4" smooth to="/#features" >Features</NavLink>

                        <HashLink to="/signup" className='  justify-center w-[160px]  flex  bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black p-4 text-sm rounded-r-xl  border-orange sm:p-3 sm:px-10 mr-2' >
                            <button >Sign Up</button>
                        </HashLink>

                    </div>
                </nav>
            </div>

        </div>
    );
}






export default NavBar;