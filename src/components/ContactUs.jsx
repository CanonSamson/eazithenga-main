

//components
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

//images
import contact from '../asset/icon_svg/contact.svg'

//icons
import { MdPhone, MdFmdGood, MdEmail } from "react-icons/md";
import { useState } from 'react';

const ContactUs = () => {
    const initialValues = {
        name: '',
        email: '',
        whatsappNumber: '',
        subject: '',
        message: '',

    }
    const [formValues, setFormValues] = useState(initialValues)
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    }
    const handleSubmit = (e) => {
        e.prevemtDefault();
    }



    return (
        <div className=' px-5 bg-gray-50 relative pb-10'>
            <section className=' relative grid grid-cols-1 Btablet:h-[500px] Btablet:shadow-xl Btablet:w-full  tablet:grid-cols-2 Btablet:flex  gap-5 '>
                <a href='mailto:info@eazithenga.com' className=' bg-white   flex flex-col Btablet:w-[33%] Btablet:mr-[66.6%] Btablet:absolute top-10 h-[250px] left-0  justify-center items-center p-10'>
                    <div className=' p-3 text-orange rounded-full border-2 border-dashed border-orange'>
                        <MdEmail size={30} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=' text-xl font-semibold my-4'>Email Us:</h1>
                        <p className=' text-center' >info@eazithenga.com</p>
                    </div>
                </a>


                <section className=' bg-white   flex flex-col Btablet:w-[33%] Btablet:shadow-xl  Btablet:mx-[33.3%] Btablet:absolute top-20 h-[250px] left-0  justify-center items-center p-10'>
                    <div className='  p-3 text-orange rounded-full border-2 border-dashed border-orange'>
                        <MdPhone size={30} />
                    </div>
                    <a href='https://wa.link/483ix2' className='flex flex-col justify-center items-center'>
                        <h1 className=' text-2xl font-semibold my-3'>Call Us:</h1>
                        <div className=' flex items-center'>
                            <p>Tel:</p>
                            <p >+27 60 074 8715 </p>
                        </div>

                    </a>
                </section>


                <a href='https://www.google.com/maps/place/7+Churchill+Rd,+Plumstead,+Cape+Town,+7801,+South+Africa/@-34.0154752,18.4795903,17z/data=!3m1!4b1!4m5!3m4!1s0x1dcc43a98d21bb0b:0x5efa5535c4e72f74!8m2!3d-34.0154797!4d18.481779'
                    className=' bg-white   flex flex-col Btablet:w-[33%] Btablet:shadow-xl Btablet:ml-[66.6%] Btablet:absolute top-44 h-[250px] right-0  justify-center items-center p-10'>
                    <div className='  p-3 text-orange rounded-full border-2 border-dashed border-orange'>
                        <MdFmdGood size={30} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=' text-2xl font-semibold my-3'>South Africa</h1>
                        <p className=' text-center' > 7 Churchill Road, Plumstead, 7800</p>
                    </div>
                </a>

            </section>


            <div>
                <div className=' mt-10 flex flex-col justify-center items-center'>
                    <h1 className=' font-bold text-2xl text-center'>Contact Us</h1>
                    {/* <p className=' text-center tablet:max-w-[800px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium. Aliquam minus quisquam velit in at nam</p> */}
                </div>

                <div className=' flex flex-col Btablet:flex-row justify-around tablet:mt-20 items-center ' >
                    <form onSubmit={handleSubmit} className="bg-white shadow-md max-w-[500px] rounded px-5 pt-6 pb-8 mb-4 w-[100%]  ">
                        <div className="mb-4 gap-5 grid">
                            <Input type="text" placeholder=" Name "
                                errorMessage="Name is required "
                                name="name" value={formValues.name}
                                onChange={handleChange}
                                required pattern="^[A-Z-a-z- -]{3,22}$" />
                            <Input type="email" placeholder=" Email Address " name="email" value={formValues.email} onChange={handleChange} />
                            <Input type="tel"
                                placeholder="WhatsApp Number"
                                name="whatsappNumber"
                                errorMessage="WhatsApp Number must be a vaild SF telephone number  (11 digits) don't include +  "
                                value={formValues.whatsappNumber}
                                onChange={handleChange}
                                required pattern="^\d{11}$" />

                            <Input type="text" placeholder="Subject " name="subject" value={formValues.subject} onChange={handleChange} />
                            <Textarea placeholder="Write Your Message"
                                name="message" value={formValues.message}
                                onChange={handleChange}
                                required pattern="" />
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


