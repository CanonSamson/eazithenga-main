import { Link } from "react-router-dom";

//components
import Button from "../components/Button";
import Input from "../components/Input";

//images
import logo from '../asset/icon_svg/logo.svg'

import { useState } from "react";


function Login() {
    const initialValues = {
        whatsappNumber: '',
        password: '',
    }
    const [formValues, setFormValues] = useState(initialValues)
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues)
    }

    return (
        <div className=" p-5 h-screen w-full flex flex-col justify-center items-center">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <span className=" bg-slate-100 w-10 h-10 text-xl absolute left-[10%] z-20 top-4 shadow-lg"> </span>
            <span className=" bg-orange-40 w-10 h-10 text-xl absolute left-[20%] z-20 top-10 shadow-lg"> </span>

            <form className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4 flex flex-col w-[100%] max-w-[500px]">
                <h1 className=" text-2xl font-semibold mb-5">LogIn</h1>
                <div className="mb-4 gap-5 grid">
                    <Input type="tel"
                        placeholder="WhatsApp Number"
                        name="whatsappNumber"
                        errorMessage="WhatsApp Number must be a vaild SF telephone number (11 digits), don't include +   "
                        value={formValues.whatsappNumber}
                        onChange={handleChange}
                        required pattern="^\d{11}$" />

                    <Input type="password" placeholder="Password" name="password"
                        errorMessage="incorrect password pls try again"
                        value={formValues.password}
                        onChange={handleChange}
                        required pattern="^\d{11}$" />
                </div>
                <div className="flex items-center justify-between">
                    <Button value=" LogIn" link="" />
                    <Link className="inline-block align-baseline text-sm text-orange hover:text-orange/40" to="#">
                        Forgot Password?
                    </Link>
                </div>
            </form>
            <span className="inline-block align-baseline font-bold text-sm text-black" to="#">
                don't have an account <Link className=" text-orange hover:text-orange/40" to="/signup">
                    Sign Up</Link>
            </span>
            <span className=" bg-slate-100 w-10 h-10 text-xl absolute right-[10%] z-20 bottom-4 shadow-lg"> </span>
            <span className=" bg-orange-40 w-10 h-10 text-xl absolute right-[20%] z-20 bottom-10 shadow-lg"> </span>
        </div>
    );
}

export default Login;