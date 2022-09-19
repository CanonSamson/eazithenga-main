
//icons
import { BsCart3 } from 'react-icons/bs'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'

//import imgs here
import hero from '../asset/icon_svg/hero.svg'
import online from '../asset/icon_svg/8.svg'
import sell from '../asset/icon_svg/5.svg'
import data from '../asset/icon_svg/4.svg'
import phone from '../asset/icon_svg/phone.svg'
import bg from '../asset/icon_svg/bg.png'
import bg1 from '../asset/icon_svg/bg1.png'
import bg2 from '../asset/icon_svg/bg2.png'
import cb from '../asset/icon_svg/cb.png'
import picture from "../asset/image/picture.png"
//icons


import { Outlet } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'


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
            icon: online,
            describtion: 'All your small business solutions in one platform, from admin to marketing.'
        },
        {
            id: 3,
            header: 'Manage Your Store',
            icon: data,
            describtion: 'Customers can view all your products and their prices. With Eazi Thenga, ordering from your business with be as eay as one,two,three'
        },

    ]
    return (
        <div className=" relative overflow-hidden">
            <img className=" absolute opacity-80 top-0 right-[-100px] overflow-hidden  " src={bg} alt="" />
            <img className=" absolute opacity-30  top-[600px] right-[-150px] overflow-hidden  " src={bg1} alt="" />
            <img className=" absolute top-[1500px] opacity-30  left-[-150px] overflow-hidden  " src={bg2} alt="" />
            <img className=" absolute  right-10 top-[450px] opacity-30" src={cb} alt="" />

            <header id="top" className=" z-1  pt-[100px] px-5 max-w-[1000px] relative m-auto  pb-20 rounded-br-3xl  flex justify-center items-center flex-col Btablet:flex-row sm:flex-row ">
                <section className=" Btablet:grid  grid-cols-2   items-center justify-around relative ">

                    <div>
                        <h1 className=" text-4xl font-bold mb-2 Btablet:text-2xl Stablet:text-4xl mt-20 tablet:text-5xl">Selling Via Social<br />Media Made Easy</h1>
                        <p className="  Stablet:text-xl   ">Tired of missing customers? With Eazi Thenga - you'll never miss one again! We help small businesses set up online storefront where you
                            can showcase your products, receive orders, chat customers and much more.</p>
                        <HashLink smooth to="/signup#signup" className='  justify-center w-[160px] mt-5 flex  bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black p-4 text-sm rounded border-orange sm:p-3 sm:px-10 mr-2' >
                            <button >Get Started</button>
                        </HashLink>
                    </div>
               
                    <div className="  flex justify-center mt-10 Btablet:mt-0 ">

                        <div className=" relative  ">
                            <div className=" flex items-center z-10 bg-blue text-white absolute left-0 bottom-16 p-4 ">
                                <IoCheckmarkDoneCircle />
                                <span className="ml-2">Get Orders Via Whatsapp</span>
                            </div>
                            <img className=" w-[400px] z-4 Btablet:w-[350px]  relative m-auto" src={hero} alt="hero" />
                            <div className=" flex items-center z-10 bg-lblue text-blue absolute right-[-10px] top-16 p-4 ">
                                <BsCart3 />
                                <span className="ml-2">Get An Online Store</span>
                            </div>
                        </div>

                    </div>
                </section>
            </header>
            <div id="features" className=" w-full h-[60px] "></div>


            <section id="features" className="  laptop:max-w-[1000px] relative m-auto mt-10">
                <span className=" absolute w-20 h-20 bg-lblue opacity-40  left-20 tablet:left-40 z-0"></span>
                <div className=" flex justify-center flex-col mx-5">
                    <h2 className="z-10 text-center font-semibold text-xl tablet:text-3xl ">A Home For Every Trader</h2>
                    <p className="z-10 text-center tablet:text-xl">All your small business solutions in one platform, from admin to marketing.</p>
                </div>
                <div className=" grid grid-cols-1 tablet:grid-cols-2 Btablet:grid-cols-3 gap-5 my-10">
                    {
                        WhyChooseEazi.map((text) => (
                            <div key={text.id} className=" bg-white why shadow-xl p-5 mx-5 rounded-br-[50px] rounded-tl-[50px] min-h-[400px] laptop:min-w-[320px]">
                                <img className=" h-40" src={text.icon} alt="" />
                                <h4 className=" my-3 font-semibold text-xl">{text.header}</h4>
                                <p>{text.describtion}</p>
                            </div>
                        ))
                    }
                </div>
            </section>


            <section className="  relative flex-col Stablet:flex-row flex justify-between items-center laptop:max-w-[1000px] m-auto pt-10 ">
                <div className='  Stablet:hidden '>
                    <h2 className=" text-2xl font-bold mx-5 text-center tablet:text-4xl">Why Choose Eazithenga</h2>
                    <p className=" py-2 sm:pb-5 mx-5 tablet:text-xl text-center">Eazi Thenga specializes in digitizing your store for you. We will help you keep track of your customers, allow your customers to view all your products, their prices as well as order. With a professional, well designed storefront that can be set up in a matter of minutes; your business is live even while you’re offline</p>
                </div>
                <div className=' relative  w-[80%] Stablet:w-[40%] m-auto'>
                    <img className="" src={picture} alt="" />
                    <img className=" absolute bottom-[16px] w-[40%] right-[-2%]" src={phone} alt="" />
                </div>
                <div className=' hidden  Stablet:block w-[50%]'>
                    <h2 className=" text-xl Stablet:text-[25px] font-bold mx-5 text-right tablet:text-2xl">Why Choose Eazithenga</h2>
                    <p className=" py-2 sm:pb-5 mx-5 Stablet:text-lg tablet:text-xl text-right">Eazi Thenga specializes in digitizing your store for you. We will help you keep track of your customers, allow your customers to view all your products, their prices as well as order. With a professional, well designed storefront that can be set up in a matter of minutes; your business is live even while you’re offline</p>
                </div>
            </section>
            <div id="pricing" className=" w-full h-[60px]"></div>
            <Outlet />


        </div>
    );
}

export default LandingPage;