import basic from '../../asset/icon_svg/basic.svg'
import professional from '../../asset/icon_svg/professional.svg'
import Button from "../Button";
import { motion } from "framer-motion";

import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from 'react-icons/io5'

const Anime = {
    offS: {
        y: 50, scale: 0, opacity: 0
    },
    onS: {
        y: 0, scale: 1, opacity: 100
    },
    transition: {

    }
}

const Annually = () => {
    return (
        <div>
            <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: .35 }} className=" w-full overflow-x-auto duration-100 transition-all ">
                <div className=" flex justify-center my-10  w-[690px]  Btablet:w-[1000px] m-auto ">

                    <div className="flex flex-col justify-center shadow-xl p-3 w-[320px] ml-5  relative h-[500px] rounded-xl">
                        <span className=' bg-blue p-5 text-white absolute right-0 top-0 rounded-tr-2xl  font-semibold text-3xl rounded-bl-xl flex items-end'><p className=' text-xl'>R</p>2000</span>
                        <img className=' bg-orange p-1 w-10 mt-20 mb-2' src={professional} alt="" />
                        <span className=' font-semibold text-3xl my-3'>Professional</span>
                        <motion.ul initial={"offS"} whileInView={"onS"} viewport={{ once: false, amount: 1}} className=' mb-5 min-h-[200px]'>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /></div>
                                <p className='  text-blue text-xm'>Store Catalog</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /></div>
                                <p className='  text-blue text-xm'>Linked with Whatsapp Catalog</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /></div>
                                <p className='  text-blue text-xm'>Upload up to 100 products</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /></div>
                                <p className='  text-blue text-xm'>Linked with Facebook Catalog</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /></div>
                                <p className='  text-blue text-xm'>Payment Gateway</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /></div>
                                <p className='  text-blue text-xm'>Chat Automation</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /></div>
                                <p className='  text-blue text-xm'>Order Management</p>
                            </motion.li>
                        </motion.ul>
                        <Button value="Get Started" link="/signup" />
                    </div>


                    <div className="flex flex-col justify-center shadow-xl p-3 w-[320px] ml-5  relative h-[500px] rounded-xl">
                        <span className=' bg-blue p-5 text-white absolute right-0 top-0 rounded-tr-2xl  font-semibold text-3xl rounded-bl-xl'>Free</span>
                        <img className=' bg-orange p-1 w-10 mt-20 mb-2' src={basic} alt="" />
                        <span className=' font-semibold text-3xl my-3'>Basic</span>
                        <motion.ul initial={"offS"} whileInView={"onS"} viewport={{ once: false, amount: 1}} className=' mb-5 min-h-[200px]'>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /></div>
                                <p className='  text-blue text-xm'>Store Catalog</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /></div>
                                <p className='  text-blue text-xm'>Linked with Whatsapp Catalog</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /></div>
                                <p className='  text-blue text-xm'>Upload up to 10 products</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCheckmarkCircleSharp /> </div>
                                <p className='  text-blue text-xm'>Linked with Facebook Catalog</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCloseCircleSharp /> </div>
                                <p className='  text-blue text-xm'>Payment Gateway</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCloseCircleSharp /> </div>
                                <p className='  text-blue text-xm'>Chat Automation</p>
                            </motion.li>
                            <motion.li variants={Anime} className=' flex items-center my-1'>
                                <div className=' text-orange mr-2'><IoCloseCircleSharp /> </div>
                                <p className='  text-blue text-xm'>Order Management</p>
                            </motion.li>
                        </motion.ul>
                        <Button value="Get Started" link="/signup" />
                    </div>



                </div>
            </motion.div>
        </div >
    );
}

export default Annually;