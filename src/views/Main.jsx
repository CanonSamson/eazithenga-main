import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { MdPhone, MdFmdGood, MdEmail, MdArrowCircleUp } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion'

const Anime = {
    offS: {
        y: 20, scale: 0, opacity: 0
    },
    onS: {
        y: 0, scale: 1, opacity: 100
    },
    transition: {

    }
}
const Main = () => {

    return (
        <div className=" relative">
            <HashLink smooth to="#top" className=" bg-orange p-5 rounded-full fixed bottom-5 right-5 text-white  z-50">
                <MdArrowCircleUp />
            </HashLink>
            <NavBar />
            <Outlet />

            <motion.section className=' bg-gray-100 pt-10  Btablet:grid grid-cols-3 m-auto'>
                <motion.a initial={"offS"} whileInView={"onS"} viewport={{ once: false, amount: .8 }} transition={{ staggerChildren: 0.35 }} href='mailto:info@eazithenga.com' className=' flex flex-col justify-center min-w-300px m-5 bg-white py-20 '>
                    <motion.div variants={Anime} className=' p-3 text-orange rounded-full border-2 border-dashed border-orange w-14 h-14 justify-center flex items-center m-auto '>
                        <MdEmail size={30} />
                    </motion.div>
                    <div className='flex flex-col justify-center items-center'>
                        <motion.h1 variants={Anime} className=' text-xl Btablet:text-lg font-semibold '>Email Us:</motion.h1>
                        <motion.p variants={Anime} className=' text-center' >info@eazithenga.com</motion.p>
                    </div>
                </motion.a>


                <motion.a initial={"offS"} whileInView={"onS"} viewport={{ once: false, amount: .8 }} transition={{ staggerChildren: 0.35 }} href='https://wa.link/483ix2' className=' flex flex-col justify-center min-w-300px m-5 bg-white py-20 '>
                    <motion.div variants={Anime} className=' p-3 text-orange rounded-full border-2 border-dashed border-orange w-14 h-14 justify-center flex items-center m-auto '>
                        <MdPhone size={30} />
                    </motion.div>
                    <div className='flex flex-col justify-center items-center'>
                        <motion.h1 variants={Anime} className=' text-2xl font-semibold Btablet:text-lg '>Call Us:</motion.h1>
                        <motion.div variants={Anime} className=' flex items-center'>
                            <p>Tel:</p>
                            <p className='Btablet:text-sm' >+27 60 074 8715 </p>
                        </motion.div>

                    </div>
                </motion.a>


                <motion.a initial={"offS"} whileInView={"onS"} viewport={{ once: false, amount: .8 }} transition={{ staggerChildren: 0.35 }} href='https://www.google.com/maps/place/7+Churchill+Rd,+Plumstead,+Cape+Town,+7801,+South+Africa/@-34.0154752,18.4795903,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcc43a98d21bb0b:0x5efa5535c4e72f74!8m2!3d-34.0154797!4d18.481779'
                    className=' flex flex-col justify-center min-w-300px m-5 bg-white py-20 '>
                    <motion.div variants={Anime} className=' p-3 text-orange rounded-full border-2 border-dashed border-orange w-14 h-14 justify-center flex items-center m-auto '>
                        <MdFmdGood size={30} />
                    </motion.div>
                    <div className='flex flex-col justify-center items-center'>
                        <motion.h1 variants={Anime} className=' text-2xl font-semibold Btablet:text-xl'>South Africa</motion.h1>
                        <motion.p variants={Anime} className=' text-center Btablet:text-sm' > 7 Churchill Road, Plumstead, 7800</motion.p>
                    </div>
                </motion.a>

            </motion.section>

            <Footer />
        </div>
    );
}

export default Main;