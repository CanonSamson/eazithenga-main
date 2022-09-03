

//components
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

//images
import contact from '../asset/icon_svg/contact.svg'

//icons
import { MdPhone, MdFmdGood, MdEmail } from "react-icons/md";

const ContactUs = () => {

    return (
        <div className=' px-5 bg-gray-50 relative pb-10'>
            <section className=' relative grid grid-cols-1 Btablet:h-[500px] Btablet:shadow-xl Btablet:w-full  tablet:grid-cols-2 Btablet:flex  gap-5 '>
                <section className=' bg-white   flex flex-col Btablet:w-[33%] Btablet:mr-[66.6%] Btablet:absolute top-10 h-[250px] left-0  justify-center items-center p-10'>
                    <div className=' p-3 text-orange rounded-full border-2 border-dashed border-orange'>
                        <MdEmail size={30} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=' text-xl font-semibold my-4'>Email Us:</h1>
                        <p className=' text-center' >info@eazithenga.com</p>
                    </div>
                </section>


                <section className=' bg-white   flex flex-col Btablet:w-[33%] Btablet:shadow-xl  Btablet:mx-[33.3%] Btablet:absolute top-20 h-[250px] left-0  justify-center items-center p-10'>
                    <div className='  p-3 text-orange rounded-full border-2 border-dashed border-orange'>
                        <MdPhone size={30} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=' text-2xl font-semibold my-3'>Call Us:</h1>
                        <div className=' flex items-center'>
                            <p>Tel:</p>
                            <p >+27 60 074 8715 </p>
                        </div>

                    </div>
                </section>


                <section className=' bg-white   flex flex-col Btablet:w-[33%] Btablet:shadow-xl Btablet:ml-[66.6%] Btablet:absolute top-44 h-[250px] right-0  justify-center items-center p-10'>
                    <div className='  p-3 text-orange rounded-full border-2 border-dashed border-orange'>
                        <MdFmdGood size={30} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=' text-2xl font-semibold my-3'>South Africa</h1>
                        <p className=' text-center' > 7 Churchill Road, Plumstead, 7800</p>
                    </div>
                </section>

            </section>


            <div>
                <div className=' mt-10 flex flex-col justify-center items-center'>
                    <h1 className=' font-bold text-2xl text-center'>Contact Us</h1>
                    {/* <p className=' text-center tablet:max-w-[800px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium. Aliquam minus quisquam velit in at nam</p> */}
                </div>

                <div className=' flex flex-col Btablet:flex-row justify-around tablet:mt-20 items-center ' >
                    <form className="bg-white shadow-md max-w-[500px] rounded px-5 pt-6 pb-8 mb-4 w-[100%]  ">
                        <div className="mb-4 gap-5 grid">
                            <Input type="text" placeholder=" Name " />
                            <Input type="email" placeholder=" Email Address " />
                            <Input type="tel" placeholder=" Phone Number " />
                            <Input type="text" placeholder="Subject " />
                            <Textarea placeholder="Write Your Message" />
                        </div>
                        <div className="flex items-center justify-between">
                             <Button value="Send Message" link="" />
                        </div>
                    </form>
                    <div>
                        <img src={contact} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;


