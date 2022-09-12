
import { useState } from "react";

const Textarea = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <div className=" relative   mt-5">
            <label>{label}</label>
            <div className=" sh w-full p-3  ">
                <textarea {...inputProps} onChange={onChange}
                    className="  main-input w-full   focus:outline-none relative 
        bg-transparent z-20 rounded text-black"  required onBlur={handleFocus} focused={focused.toString()} />
            </div>
        </div>
    );
}

export default Textarea;