import { useState } from 'react'
import '../views/dashboard/css.css'

const Input = ({ label, code, onChange, icon, errorMessage, placeholder, required }) => {

    const [focused, setFocused] = useState(false)
    const handlef = () => {
        setFocused(true)
    }

    return (
        <div className=" relative  Btablet:py-0    ">
            <label className=" flex my-3 text-lg">{label} <p className=" text-red-600">{require}</p></label>
            <div className="main flex sh pl-3 py-1 w-full items-center">
                <img className="w-[24px]" src={icon} alt="" />
                <p className="mx-2">{code}</p>
                <input onChange={onChange}
                    className=" w-full p-3 Minput  focus:outline-none relative
                    bg-transparent z-20   text-black" placeholder={placeholder}
                    onBlur={handlef} focused={focused.toString()} required={required} />
                     <span className='pre absolute text-[10px] text-red-600 mb-[-90px] left-0 '>{errorMessage}</span>
            </div>
        </div>
    );
}

export default Input;