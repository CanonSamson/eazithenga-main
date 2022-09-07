import { Link } from "react-router-dom";
import Input from "../components/Input";
import logo from '../asset/icon_svg/logo.png'
import Textarea from "../components/Textarea";
import { useState } from "react";


const SignUp = () => {
    const initialValues = {
        whatsappNumber: '',
        storeName: '',
        description: '',
        password: '',
        confirmPassword: ''
    }
    const [formValues, setFormValues] = useState(initialValues)
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues)
    }

    return (
        <div>
            <div className="flex justify-between items-center bg-white shadow-xl fixed top-0 z-30 w-full px-5 py-3">
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <img className=" w-40" src={logo} alt="" />
            </div>
            <div className=" p-5 my-20 tablet:my-0 tablet:h-screen w-full flex flex-col justify-center items-center">

                <span className=" bg-slate-100 w-10 h-10 text-xl absolute left-[10%] z-20 top-4 shadow-lg"> </span>
                <span className=" bg-orange-40 w-10 h-10 text-xl absolute left-[20%] z-20 top-10 shadow-lg"> </span>


                <form className="bg-white Btablet:shadow-md rounded px-5 pt-6 pb-8 mb-4 flex flex-col w-[100%] max-w-[600px]">

                    <h1 className=" text-xl font-semibold mb-5">Register Your Store</h1>

                    <div className="mb-4 Btablet:grid Btablet:gap-5 Btablet:grid-cols-2">
                        <Input type="tel"
                            placeholder="WhatsApp Number"
                            name="whatsappNumber"
                            errorMessage="WhatsApp Number must be a vaild SF telephone number  (11 digits) don't include +  "
                            value={formValues.whatsappNumber}
                            onChange={handleChange}
                            required pattern="^\d{11}$" />

                        <Input type="text"
                            placeholder="Store Name"
                            name="storeName"
                            value={formValues.storeName}
                            errorMessage="Store Name is required"
                            onChange={handleChange}
                            required pattern="" />

                        <div className=" col-span-2">
                            <Textarea placeholder="Description"
                                name="description"
                                value={formValues.description}
                                onChange={handleChange}
                                required pattern="" />
                        </div>

                        <Input type="password"
                            placeholder="Password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                            required />

                        <Input type="password"
                            placeholder="Confirm  Password"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                            required />
                    </div>


                    <div className="flex items-center justify-between">
                        <button className=" border border-orange hover:bg-orange-dark text-black font-bold py-2 px-7 rounded" type="button">
                            Register
                        </button>
                    </div>
                </form>


                <span className="inline-block align-baseline  text-sm text-black" to="#">
                    Have an account <Link className=" text-orange hover:text-orange/40" to="/login">Log In</Link>
                </span>

            </div>
        </div>
    );
}

export default SignUp;