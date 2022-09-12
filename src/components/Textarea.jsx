
import { useState } from "react";

const Textarea = (props) => {
    const [focused, setFocused] = useState(false)
    const {label,  errorMessage, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <div className=" relative   mt-5">
            <label>{label}</label>
            <textarea {...inputProps} onChange={onChange}
                className=" sh main-input w-full p-3  focus:outline-none relative 
        bg-transparent z-20 rounded text-black"  required onBlur={handleFocus} focused={focused.toString()} />
        </div>
    );
}

export default Textarea;