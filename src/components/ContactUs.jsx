

//components
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

//images
import contact from '../asset/icon_svg/6.svg'

//icons
import profile from '../asset/icon_svg/profile.svg'
import email from '../asset/icon_svg/email.svg'
import flag from '../asset/icon_svg/flag.svg'
import data from '../asset/icon_svg/datas.svg'

import bg from '../asset/icon_svg/bg.png'
import bg1 from '../asset/icon_svg/bg1.png'
import bg2 from '../asset/icon_svg/bg2.png'
import cb from '../asset/icon_svg/cb.png'

import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

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
        const { value, name } = e.target;
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues)
    }
    const handleSubmit = (e) => {
        e.prevemtDefault();
    }

    const input = [
        {
            id: 1,
            errorMessage: "Name should be 3-16 characters and shouldn't include any special character!",
            name: "name",
            label: '',
            placeholder: 'Name',
            icon: profile,
            require: '',
            pattern: "canon",
            type: 'text',
            required: true,
            // ^[A-Z-a-z0-9]{3,16}$

        },

        {
            id: 2,
            label: '',
            name: 'email',
            placeholder: 'example@email.com',
            icon: email,
            require: '',
            errorMessage: '',
            pattern: '',
            type: 'email'

        },
        {
            id: 3,
            label: ' ',
            name: 'whatsappNumber',
            value: 'whatsappNumber',
            placeholder: '60 07487 15',
            icon: flag,
            require: '',
            code: "+27",
            errorMessage: '',
            pattern: "^\d{11}$",
            type: 'tel'
        },
        {
            id: 4,
            label: ' ',
            name: 'subject',
            placeholder: 'Subject',
            icon: "",
            require: '',
            errorMessage: '',
            pattern: '',
            type: 'text'
        },
    ]

    return (
        <div className=' px-5  relative pb-10 mt-[30px]  overflow-hidden'>
            <img className=" absolute opacity-80 top-0 right-[-100px] overflow-hidden  " src={bg} alt="" />      

            <header id="contact" className=" z-1  pt-[60px] max-w-[1000px] relative m-auto   rounded-br-3xl  flex justify-center items-center flex-col Btablet:flex-row sm:flex-row ">
                <section className=" Btablet:flex items-center justify-around relative ">

                    <div className=' z-10 relative Stablet:w-[45%]'>
                        <h1 className=" text-4xl font-bold mb-2 mt-20 tablet:text-5xl">Contact Us</h1>
                        <p className="    ">Tired of missing customers? With Eazi Thenga - you'll never miss one again! We help small businesses set up online storefront where you
                            can showcase your products, receive orders, chat customers and much more.</p>
                        <HashLink smooth to="#GETINTOUCH" className='  justify-center w-[160px] mt-5 flex  bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black p-4 text-sm rounded  border-orange sm:p-3 sm:px-10 mr-2' >
                            <button >Get In Touch</button>
                        </HashLink>
                    </div>

                    <div className=" mt-10 flex justify-center Stablet:w-[60%]">

                        <img className='z-2 w-[100%]   opacity-30 Stablet:opacity-100 absolute Stablet:relative  top-[-10%]' src={data} alt="" />
                    </div>
                </section>
            </header>

            <div>
                <div id='GETINTOUCH' className=' w-full h-[60px]'></div>

                <div className=' flex flex-col Btablet:flex-row justify-center items-center relative z-20 ' >
                    <form onSubmit={handleSubmit} className="bg-white shadow-md max-w-[1000px] rounded px-5 pt-6 pb-8 mb-4 w-[100%]  ">
                        <div className="mb-4 gap-5 grid  Stablet:grid-cols-2">
                            {
                                input.map((input) => (
                                    <Input key={input.id}
                                        {...input}
                                        onChange={handleChange}
                                        value={formValues[input.value]} />
                                ))
                            }

                            <div className=' Stablet:col-span-2'>
                                <Textarea placeholder="Write Your Message"
                                    name="message" value={formValues.message}
                                    onChange={handleChange}
                                    errorMessage="canon di"
                                    required pattern="cano" />
                            </div>
                        </div>
                        <button className=" bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black p-4 
                     text-sm rounded  border-orange sm:p-3 sm:px-10 mr-2" >Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;


