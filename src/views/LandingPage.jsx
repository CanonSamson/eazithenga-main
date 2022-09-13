
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
//icons


import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
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
            <img className=" absolute top-0 right-[-100px] overflow-hidden  " src={bg} alt="" />
            <img className=" absolute top-[600px] right-[-150px] overflow-hidden  " src={bg1} alt="" />
            <img className=" absolute top-[1500px] left-[-150px] overflow-hidden  " src={bg2} alt="" />
            <img className=" absolute  right-10 top-[450px]" src={cb} alt="" />
          
            <header id="top" className=" z-1  pt-[100px] px-5 max-w-[1000px] relative m-auto  pb-20 rounded-br-3xl  flex justify-center items-center flex-col Btablet:flex-row sm:flex-row ">
                <section className=" Btablet:flex items-center justify-around relative ">

                    <div>
                        <h1 className=" text-4xl font-bold mb-2 mt-20 tablet:text-5xl">Selling Via Social<br />Media Made Easy</h1>
                        <p className="   ">Eazi Thenga helps small businesses set up online storefronts where you can showcase your products,
                            receive orders, chat customers and much more.</p>
                        <HashLink smooth to="/signup#signup" className='  justify-center w-[160px] mt-5 flex  bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black p-4 text-sm rounded-r-xl  border-orange sm:p-3 sm:px-10 mr-2' >
                            <button >Get Started</button>
                        </HashLink>
                    </div>

                    <div className=" mt-10 flex justify-center">

                        <div className=" w-full relative">
                            <div className=" flex items-center bg-lblue text-blue absolute right-[-10px] top-16 p-4 ">
                                <BsCart3 />
                                <span className="ml-2">Get An Online Store</span>
                            </div>
                            <img className=" w-[400px] Btablet:w-[600px] m-auto" src={hero} alt="hero" />

                            <div className=" flex items-center bg-blue text-white absolute left-0 bottom-16 p-4 ">
                                <IoCheckmarkDoneCircle />
                                <span className="ml-2">Get Orders Via Whatsapp</span>
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


            <section className="  relative text-center laptop:flex  items-center justify-center  ">
                <div className=" laptop:w-[50%]">
                    <h2 className=" text-2xl font-bold mx-5 tablet:text-4xl">Why Choose Eazithenga</h2>
                    <div className="max-w-[1000px] m-auto">
                        <p className=" py-2 sm:pb-5 mx-5 tablet:text-xl ">Eazi Thenga specializes in digitizing your store for you. We will help you keep track of your customers, allow your customers to view all your products, their prices as well as order. With a professional, well designed storefront that can be set up in a matter of minutes; your business is live even while you’re offline</p>
                    </div>
                </div>
                <div className=" flex justify-center my-10">
                    <img className=" w-[400px] Btablet:w-[500px] m-auto" src={phone} alt="" />
                </div>
            </section>
            <div id="pricing" className=" w-full h-[60px]"></div>
            <Outlet />


        </div>
    );
}

export default LandingPage;