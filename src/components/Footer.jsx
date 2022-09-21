import { HashLink } from 'react-router-hash-link';
import { MdMail } from 'react-icons/md'

import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className=" bg-orange py-10 px-5   relative">
            <div className=' grid grid-cols-1  Stablet:grid-cols-6 gap-4 py-5'>
                <div className=' col-span-2 text-white'>
                    <span className=' text-xl font-semibold '>Stay Up To date </span>
                    <p> With Our New Products And Services</p>
                    <div className=' flex justify-between bg-white my-3  rounded-xl overflow-hidden'>
                        <input className=' focus:outline-none px-4 text-black flex-1' placeholder='Enter Your Email' type="text" name="" id="" />
                        <div className=' bg-blue p-3 '>
                            <MdMail />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col text-xl Btablet:flex-row  Stablet:col-span-4 justify-around'>
                    <ul>
                        <li className=' my-4 text-blue'>Quick Links</li>
                        <li className=' my-4 text-white'>FAQS</li>
                        <li className=' my-4 text-white'><Link to="/signup">Register</Link></li>
                    </ul>
                    <ul>
                        <li className=' my-4 text-blue'>About</li>
                        <li className=' my-4 text-white'>Why Us</li>
                        <li className=' my-4 text-white'> <HashLink smooth to="/#features" >Features</HashLink></li>
                        <li className=' my-4 text-white'><HashLink smooth to="/#pricing" >Pricing</HashLink></li>
                    </ul>
                    <ul>
                        <li className=' my-4 text-blue'>Legal</li>
                        <li className=' my-4 text-white'>Terms </li>
                        <li className=' my-4 text-white'>Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <div className=' flex flex-col items-center justify-center pt-10 border-t border-white  '>
                <div className='flex items-center justify-center my-4 '>
                    <a className='text-white ' href="https://www.linkedin.com/company/eazi-thenga/"> <FaLinkedin size={30} /></a>
                    <a className='text-white mx-10' href="https://twitter.com/EaziThenga"><FaTwitter size={30} /></a>
                </div>
                <span className=' text-center'>  All Rights Reserved - Eazi Thenga 2022</span>

            </div>

        </div>
    );
}

export default Footer;