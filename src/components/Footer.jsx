import { HashLink } from 'react-router-hash-link';


import { FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=" bg-orange py-10 px-5   relative">

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
                    
                <div className=' flex items-center  '>
                    <a className='text-white ' href="https://www.linkedin.com/company/eazi-thenga/">
                        <FaLinkedin />
                    </a>

                    <a className='text-white mx-10'  href="https://twitter.com/EaziThenga">
                        <FaTwitter />
                    </a>

                </div>
                </ul>

                {/* whatsapp, Twitter: , LinkedIn:  */}
            </div>
        </div>
    );
}

export default Footer;