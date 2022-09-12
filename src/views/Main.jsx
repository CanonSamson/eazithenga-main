import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { MdPhone, MdFmdGood, MdEmail } from "react-icons/md";

const Main = () => {
    return ( 
        <div>
            <NavBar />
            <Outlet />


            <section className=' bg-gray-100 pt-10  Btablet:grid grid-cols-3 m-auto'>
                <a href='mailto:info@eazithenga.com' className=' flex flex-col justify-center min-w-300px m-5 bg-white py-20 '>
                    <div className=' p-3 text-orange rounded-full border-2 border-dashed border-orange w-14 h-14 justify-center flex items-center m-auto '>
                        <MdEmail size={30} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=' text-xl Btablet:text-lg font-semibold '>Email Us:</h1>
                        <p className=' text-center' >info@eazithenga.com</p>
                    </div>
                </a>


                <a href='https://wa.link/483ix2' className=' flex flex-col justify-center min-w-300px m-5 bg-white py-20 '>
                    <div className=' p-3 text-orange rounded-full border-2 border-dashed border-orange w-14 h-14 justify-center flex items-center m-auto '>
                        <MdPhone size={30} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=' text-2xl font-semibold Btablet:text-lg '>Call Us:</h1>
                        <div className=' flex items-center'>
                            <p>Tel:</p>
                            <p className='Btablet:text-sm' >+27 60 074 8715 </p>
                        </div>

                    </div>
                </a>


                <a href='https://www.google.com/maps/place/7+Churchill+Rd,+Plumstead,+Cape+Town,+7801,+South+Africa/@-34.0154752,18.4795903,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcc43a98d21bb0b:0x5efa5535c4e72f74!8m2!3d-34.0154797!4d18.481779'
                    className=' flex flex-col justify-center min-w-300px m-5 bg-white py-20 '>
                    <div className=' p-3 text-orange rounded-full border-2 border-dashed border-orange w-14 h-14 justify-center flex items-center m-auto '>
                        <MdFmdGood size={30} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=' text-2xl font-semibold Btablet:text-xl'>South Africa</h1>
                        <p className=' text-center Btablet:text-sm' > 7 Churchill Road, Plumstead, 7800</p>
                    </div>
                </a>

            </section>

            <Footer />
        </div>
     );
}
 
export default Main;