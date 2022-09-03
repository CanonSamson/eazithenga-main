import { HashLink } from 'react-router-hash-link';

import { MdArrowCircleUp } from "react-icons/md";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=" bg-orange py-10 px-5   relative">

            <HashLink smooth to="#top" className=" bg-orange p-5 rounded-full absolute bottom-20 right-5 text-white animate-bounce z-30">
                <MdArrowCircleUp />
            </HashLink>
            <div>
                <ul className='  '>
                    <li className=' my-5 text-white py-2  '>
                        <HashLink smooth to="#features" >Features</HashLink>
                    </li>

                    <li className=' my-5 text-white py-2  '>
                        <HashLink smooth to="#about" >About</HashLink>
                    </li>

                    <li className=' my-5 text-white py-2  '>
                        <HashLink smooth to="#contactus" >Contact</HashLink>
                    </li>
                </ul>

                <div className=' flex items-center justify-center '>
                    <a className='text-white mx-10' href="https://www.linkedin.com/company/eazi-thenga/">
                        <FaLinkedin />
                    </a>

                    <a className='text-white mx-10'  href="https://twitter.com/EaziThenga">
                        <FaTwitter />
                    </a>

                </div>
                {/* whatsapp, Twitter: , LinkedIn:  */}
            </div>
        </div>
    );
}

export default Footer;