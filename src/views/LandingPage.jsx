import Button from "../components/Button";
import NavBar from "../components/NavBar";
import { motion } from 'framer-motion'


//icons
import { MdMessage } from "react-icons/md";

//import imgs here
import headerbg from '../asset/icon_svg/ill.svg'
import online from '../asset/icon_svg/icon-online.svg'
import sell from '../asset/icon_svg/ta.svg'
import data from '../asset/icon_svg/Data.svg'
import phone from '../asset/icon_svg/phone.svg'

import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const LandingPage = () => {
    const WhyChooseEazi = [

        {
            id: 1,
            header: 'Sell On The Go',
            icon: sell,
            describtion: 'By connecting your storefront to any social media platform, you can sell and receive orders from your existing customers and have new customers view your store easily.'
        },
        {
            id: 2,
            header: 'One Platform',
            icon: data,
            describtion: 'All your small business solutions in one platform, from admin to marketing.'
        },
        {
            id: 3,
            header: 'Manage Your Store',
            icon: online,
            describtion: 'Customers can view all your products and their prices. With Eazi Thenga, ordering from your business with be as eay as one,two,three'
        },

    ]
    return (
        <div className=" relative">
            <NavBar />
            <header id="top" className=" z-1  pt-[100px] px-5 max-w-[1000px] relative m-auto  pb-20 rounded-br-3xl  flex justify-center items-center flex-col Btablet:flex-row sm:flex-row ">
                <div className=" bg-orange p-5 rounded-full fixed bottom-20 right-5 text-white  z-30">
                    <MdMessage size={10} />
                </div>

                <section className=" Btablet:hidden ">
                    <div>
                        <motion.div
                            initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: .45 }}
                            className=" text-orange-400 font-mono  shadow-lg absolute left-5 p-2 rounded"> GET ORDERS VIA </motion.div>
                        <motion.div
                            initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: 1, duration: .45 }} className=" text-orange-400 font-mono  shadow-lg absolute top-36 left-[100px] p-2 rounded "> WHATSAPP </motion.div>
                        <span className=" bg-orange-40 w-10 h-10 text-xl absolute right-40 top-20 shadow-lg"> </span>
                        <span className=" bg-slate-100 w-10 h-10 text-xl absolute right-[10%] z-20 bottom-4 shadow-lg"> </span>
                        <span className=" bg-orange-40 w-10 h-10 text-xl absolute right-[20%] z-20 bottom-10 shadow-lg"> </span>
                        <motion.div
                            initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ delay: 1.5, duration: .45 }} className=" text-orange   absolute rihgt-0 z-30 top-[30%] right-10 bg-slate-50 p-2 rounded"> START YOUR </motion.div>
                        <motion.div
                            initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ delay: 2, duration: .45 }} className=" text-blue font-semibold text-xl absolute rihgt-0 z-30 top-[39%] bg-white shadow-xl right-10 p-2 rounded"> ONLINE STORE</motion.div>
                    </div>
                    <img className="z-20 relative mb-10 w-[300px]  tablet:w-[350px] " src={headerbg} alt="headerigm" />
                    <span className=" absolute top-[200px] z-2  left-0 w-[300px] tablet:w-[450px] tablet:h-[270px] rounded-r-full h-[200px] bg-orange"></span>
                </section>


                <section className=" relative z-10 Btablet:w-[50%]  laptop:w-[100%]">

                    <h1 className=" font-bold text-3xl tablet:text-4xl laptop:text-5xl "><span className=" text-white Btablet:text-black  text-2xl tablet:text-3xl laptop:text-5xl ">Selling via Social </span><br />Media made Easy</h1>
                    <p className=" py-2 laptop:w-[80%] tablet:pb-5 tablet:text-lg">Tired of missing customers? With Eazi Thenga - you'll never miss one again! we help small businesses set up online storefront where you can showcase your products, receive orders, chat customers and much more.</p>
                    <div className=" flex justify-center Btablet:justify-start mt-5">
                        <Button value="SELL EASILY" link="/store" />
                        <Button value="CONTACT US" link="#contactus" />
                    </div>
                </section>


                <section className=" hidden Btablet:flex Btablet:w-[50%] ">
                    <motion.div
                        initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ duration: .45 }} className=" text-orange-400 font-mono  shadow-lg absolute right- p-2 rounded"> GET ORDERS VIA </motion.div>
                    <motion.div
                        initial={{ y: -1000 }} animate={{ y: 0 }} transition={{ delay: 1, duration: .45 }} className=" text-orange-400 font-mono  shadow-lg absolute top-40 z-30 right-[5px] p-2 rounded"> WHATSAPP </motion.div>
                    <span className=" bg-orange-40 w-10 h-10 text-xl absolute right-40 top-20 shadow-lg"> </span>
                    <span className=" bg-slate-100 w-10 h-10 text-xl absolute right-[10%] z-20 bottom-4 shadow-lg"> </span>
                    <span className=" bg-orange-40 w-10 h-10 text-xl absolute right-[20%] z-20 bottom-10 shadow-lg"> </span>
                    <motion.div
                        initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ delay: 1.5, duration: .45 }} className=" text-blue font-semibold text-xl absolute left-[50%] bottom-20"> GET </motion.div>
                    <motion.div
                        initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ delay: 2, duration: .45 }} className=" text-blue font-semibold text-xl absolute left-[55%] p-2 rounded bottom-32"> ONLINE STORE</motion.div>
                    <img className="z-20 relative mb-16  mt-[5%] w-[560px]  " src={headerbg} alt="headerigm" />
                    <span className="  absolute top-[200px] z-2  right-0 w-[340px] rounded-l-full h-[200px] bg-orange"></span>
                </section>
            </header>



            <section className=" my-20 max-w-[1000px] relative m-auto bg-gray-50">
                <div id="features" className=" w-full h-20"></div>
                <h3 className=" text-2xl font-semibold mb-5 px-5">A Home for Every Trader</h3>
                <p className=" w-[90%] Btablet:w-[60%] px-5">All your small business solutions in one platform, from admin to marketing.</p>
                <div className=" grid grid-cols-1 tablet:grid-cols-2 Btablet:grid-cols-3 gap-5 my-10">
                    {
                        WhyChooseEazi.map((text) => (
                            <div key={text.id} className=" bg-white why shadow-xl p-5">
                                <img src={text.icon} alt="" />
                                <h4 className=" my-3 font-semibold text-xl">{text.header}</h4>
                                <p>{text.describtion}</p>
                            </div>
                        ))
                    }
                </div>
            </section>


            <section className="  relative text-center laptop:flex  items-center justify-center  ">
                <div className=" laptop:w-[50%]">
                    <h2 className=" text-2xl font-bold mx-5 tablet:text-4xl">Why Choose Eazithenga</h2>
                    <div className="max-w-[1000px] m-auto">
                        <p className=" py-2 sm:pb-5 mx-5 tablet:text-xl ">Eazi Thenga specializes in digitizing your store for you. We will help you keep track of your customers, allow your customers to view all your products, their prices as well as order. With a professional, well designed storefront that can be set up in a matter of minutes; your business is live even while you’re offline</p>
                    </div>
                </div>
                <div className=" flex justify-center my-10">
                    <img src={phone} alt="" />
                </div>
            </section>



            <Outlet />

            <section>
                <div id="contactus" className=" w-full h-20"></div>
                <ContactUs />
            </section>

            <Footer />
        </div>
    );
}

export default LandingPage;