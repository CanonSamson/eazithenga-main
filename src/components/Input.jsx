// import {css} from "../../asset/css.module.css

import { useState } from "react";

const Input = (props) => {
    const [focused, setFocused] = useState(false)
    const { placeholder, errorMessage, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <div className=" relative py-3 Btablet:py-0 ">
            
            <input {...inputProps} onChange={onChange}
                className=" main-input w-full p-3 border border-black border-opacity-60 focus:outline-none relative
                 bg-transparent z-20 rounded text-black"
                required onBlur={handleFocus} focused={focused.toString()} />
            <span className="text-input absolute left-0 mx-3 top-0 bg-white px-3 font-mono text-gray-700 transition duration-300 z-20">{placeholder}</span>
            <p className="error text-xs my-2 text-red-500">{errorMessage}</p>
        </div>
    );
}

export default Input;