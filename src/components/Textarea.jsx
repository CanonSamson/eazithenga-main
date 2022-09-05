
import { useState } from "react";

const Textarea = (props) => {
    const [focused, setFocused] = useState(false)
    const { placeholder, errorMessage, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {
        setFocused(true);
    }
    return ( 
        <div className=" relative ">
        <textarea {...inputProps} 
        className=" main-input w-full p-3 border border-black border-opacity-60 focus:outline-none relative 
        bg-transparent z-20 rounded text-black"  required onBlur={handleFocus} focused={focused.toString()} />
        <span className="text-input absolute font-mono text-gray-700 left-0 m-3 px-3 transition duration-300 z-10">{placeholder}</span>
    </div>
     );
}
 
export default Textarea;