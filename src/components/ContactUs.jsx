import { useState } from "react";
import { db } from "../firebase-config"
import { collection, addDoc } from "firebase/firestore"

//components
import Input from './Input';
import Textarea from './Textarea';

import { IoCheckmarkCircleSharp } from 'react-icons/io5'
//icons
import profile from '../asset/icon_svg/profile.svg'
import email from '../asset/icon_svg/email.svg'
import flag from '../asset/icon_svg/flag.svg'
import data from '../asset/icon_svg/datas.svg'

import bg from '../asset/icon_svg/bg.png'



import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

const ContactUs = () => {
    const [submit, setSubmit] = useState(false)
    const Popup = () => {
        setSubmit(!submit)
    }
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



    const [newName, setNewName] = useState("");
    const [newWhatsappNum, setNewWhatsappNum] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newSubject, setNewSubject] = useState("");
    const [newMessage, setNewMessage] = useState("");

    const usersCollectionRef = collection(db, "messages")

    const createMessage = async () => {

        await addDoc(usersCollectionRef, {
            name: newName,
            email: newEmail, whatsappname: newWhatsappNum,
            subject: newSubject, message: newMessage
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createMessage()
        Popup()
    }

    return (
        <div className=' px-5  relative pb-10 mt-[30px]  overflow-hidden'>
            <img className=" absolute opacity-80 top-0 right-[-100px] overflow-hidden  " src={bg} alt="" />

            <header className=" z-1  pt-[60px] max-w-[1000px] relative m-auto   rounded-br-3xl  flex justify-center items-center flex-col Btablet:flex-row sm:flex-row ">
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

                            <Input label="Name"
                                type="text"
                                placeholder="Name"
                                errorMessage="Name should be 3-16 characters and shouldn't include any special character!"
                                require="*"
                                icon={profile} onChange={(e) => { setNewName(e.target.value) }}
                            />

                            <Input label="Email Address"
                                type="text"
                                placeholder="example@email.com"
                                errorMessage=""
                                require=""
                                icon={email} onChange={(e) => { setNewEmail(e.target.value) }} />

                            <Input label="Whatsapp Number"
                                type="tel"
                                code="+27"
                                placeholder="60 07487 15"
                                errorMessage=" you number m"
                                pattern="^\d{11}$"
                                require="*"
                                icon={flag} onChange={(e) => { setNewWhatsappNum(e.target.value) }} />

                            <Input label="Subject"
                                type="text"
                                placeholder="subject"
                                errorMessage=""
                                require="*"
                                icon="" onChange={(e) => { setNewSubject(e.target.value) }} />

                            <div className=' Stablet:col-span-2'>
                                <Textarea placeholder="Write Your Message"
                                    name="message"
                                    onChange={(e) => { setNewMessage(e.target.value) }} />
                            </div>
                        </div>
                        <button className=" bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black p-4 
                     text-sm rounded  border-orange sm:p-3 sm:px-10 mr-2" >Send Message</button>
                    </form>
                </div>
            </div>
            {
                submit &&
                <div className=" fixed w-full h-screen bg-gray-50 top-0 flex justify-center items-center mx-auto z-50 left-0 ">
                    <div className=" shadow-xl p-5 max-w-[500px]  bg-white pt-20 flex flex-col   justify-center items-center relative">
                        <div className=" p-4 text-white bg-orange rounded-full absolute top-[-30px]">
                            <IoCheckmarkCircleSharp size={70} />
                        </div>
                        <h1 className=" text-2xl Stablet:text-4xl font-semibold ">THANK YOU</h1>
                        <p className=" text-center my-5">We've received your submission and we'll be in touch soon!</p>
                        <Link to="/">
                            <button className=" bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black p-4 
                     text-sm rounded  border-orange sm:p-3 sm:px-10 " >KEEP EXPLORING</button>
                        </Link>

                    </div>
                </div>
            }
        </div>
    );
}

export default ContactUs;


