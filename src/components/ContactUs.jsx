

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
            required:true,
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
        <div className=' px-5 bg-gray-50 relative pb-10 mt-[30px]'>
            <div id="contact" className=" w-full h-[60px] "></div>


            <div>
                <div className=' mt-10 flex flex-col justify-center items-center'>
                    <h1 className=' font-bold text-2xl text-center'>Contact Us</h1>
                </div>

                <div className=' flex flex-col Btablet:flex-row justify-around tablet:mt-20 items-center ' >
                    <form onSubmit={handleSubmit} className="bg-white shadow-md max-w-[500px] rounded px-5 pt-6 pb-8 mb-4 w-[100%]  ">
                        <div className="mb-4 gap-5 grid">
                            {
                                input.map((input) => (
                                    <Input key={input.id}
                                        {...input}
                                        onChange={handleChange}
                                        value={formValues[input.value]} />
                                ))
                            }



                            {/* <Input type="text" placeholder="Subject " name="subject" value={formValues.subject} onChange={handleChange} /> */}
                            <Textarea placeholder="Write Your Message"
                                name="message" value={formValues.message}
                                onChange={handleChange}
                                errorMessage="canon di"
                                required pattern="cano" />
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


