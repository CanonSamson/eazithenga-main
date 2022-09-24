import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css.css'
const Auth = () => {
    const [focused, setFocused] = useState(false)
   const handlef = () => {
        setFocused(true)
    }
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcccccccwjfifdashboard")


    }
    const pattern = 10392817;
    return (
        <div className=" bg-orange w-full h-screen  flex items-center px-4 ">
            <form onSubmit={handleSubmit} className=" bg-white shadow-xl rounded w-[600px] m-auto  p-10 flex flex-col" action="">
                <input className="p-4 input focus:outline-none bg-slate-100 border  mt-5" type="text" name="" placeholder=" ******************" 
                pattern={pattern} id="" required  onBlur={handlef} focused={focused.toString()}/>
                <pre className=" ppre text-sm text-red-600 mt-2 ">incorrect Password?</pre>
                <button className=" py-2 px-5  text-white font-medium bg-orange my-5">LOGIN</button>
            </form>
        </div>
    );
}

export default Auth;