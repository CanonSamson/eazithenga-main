import { HashLink } from 'react-router-hash-link';


import { FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=" bg-orange py-10 px-5   relative">

            <div>
                <div className=' flex justify-between'>
                    <ul className='  '>
                        <li className=' text-blue py-21 '>
                            <HashLink smooth to="#features" >Quick Links</HashLink>
                        </li>

                        <li className=' text-white py-1  '>
                            <HashLink smooth to="#about" >FAQS</HashLink>
                        </li>

                        <li className=' text-white py-1  '>
                            <HashLink smooth to="#contactus" >Register</HashLink>
                        </li>


                    </ul>

                    <ul className='  '>
                        <li className=' text-blue py-1 '>
                            <HashLink smooth to="#features" >About</HashLink>
                        </li>

                        <li className=' text-white py-1  '>
                            <HashLink smooth to="#about" >Why Us</HashLink>
                        </li>

                        <li className=' text-white py-1  '>
                            <HashLink smooth to="#contactus" >Features</HashLink>
                        </li>
                    </ul>

                    <ul className='  '>
                        <li className=' text-blue py-1 '>
                            <HashLink smooth to="#features" >Legal</HashLink>
                        </li>

                        <li className=' text-white py-1  '>
                            <HashLink smooth to="#about" >Terms </HashLink>
                        </li>

                        <li className=' text-white py-1  '>
                            <HashLink smooth to="#contactus" >Privacy Policy</HashLink>
                        </li>
                    </ul>

                </div>
                {/* 
                <div className=' flex items-center  '>
                    <a className='text-white ' href="https://www.linkedin.com/company/eazi-thenga/">
                        <FaLinkedin />
                    </a>

                    <a className='text-white mx-10'  href="https://twitter.com/EaziThenga">
                        <FaTwitter />
                    </a>

                </div> */}

            </div>
        </div>
    );
}

export default Footer;