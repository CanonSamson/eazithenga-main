import { Link } from "react-router-dom";
import Input from "../components/Input";
import logo from '../asset/icon_svg/logo.svg'
import Textarea from "../components/Textarea";


const SignUp = () => {
    return (
        <div className=" p-5 my-20 tablet:my-0 tablet:h-screen w-full flex flex-col justify-center items-center">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <span className=" bg-slate-100 w-10 h-10 text-xl absolute left-[10%] z-20 top-4 shadow-lg"> </span>
            <span className=" bg-orange-40 w-10 h-10 text-xl absolute left-[20%] z-20 top-10 shadow-lg"> </span>


            <form className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4 flex flex-col w-[100%] max-w-[600px]">

                <h1 className=" text-xl font-semibold mb-5">Register Your Store</h1>

                <div className="mb-4 Btablet:grid gap-5 Btablet:grid-cols-2">
                    <Input type="text" placeholder="WhatsApp Number" />
                    <Input type="text" placeholder="Store Name" />
                    <div className=" col-span-2">
                        <Textarea placeholder="Description" />
                    </div>
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm  Password" />
                </div>


                <div className="flex items-center justify-between">
                    <button className=" border border-blue hover:bg-blue-dark text-black font-bold py-2 px-7 rounded" type="button">
                        Register
                    </button>
                </div>
            </form>


            <span className="inline-block align-baseline  text-sm text-black" to="#">
                have an account <Link className=" text-blue hover:text-blue/40" to="/login">Log In</Link>
            </span>

        </div>
    );
}

export default SignUp;