
import { useState } from "react";

const Textarea = (props) => {
    const [focused, setFocused] = useState(false)
    const { placeholder, errorMessage, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {
        setFocused(true);
    }
    return ( 
        <div className=" relative ">
        <textarea {...inputProps} onChange={onChange} 
        className=" main-input w-full p-3 border border-black border-opacity-60 focus:outline-none relative 
        bg-transparent z-20 rounded text-black"  required onBlur={handleFocus} focused={focused.toString()} />
        <span className="text-input absolute font-mono text-gray-700 left-0 mx-3 top-[-12px] bg-white px-3 transition duration-300 z-20">{placeholder}</span>
    </div>
     );
}
 
export default Textarea;