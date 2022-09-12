

//components
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

//images
import contact from '../asset/icon_svg/6.svg'

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
        <div className=' px-5 bg-gray-50 relative pb-10 mt-[100px]'>
           


            <div>
                <div className=' mt-10 flex flex-col justify-center items-center'>
                    <h1 className=' font-bold text-2xl text-center'>Contact Us</h1>
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


