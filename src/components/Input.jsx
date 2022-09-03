// import {css} from "../../asset/css.module.css"

const Input = ({placeholder, type}) => {
    return (
        <div className=" relative py-3 Btablet:py-0 ">
            <input type={type} className=" main-input w-full p-3 border border-black border-opacity-60 focus:outline-none relative bg-transparent z-20 rounded text-black"  required />
            <span className="text-input absolute left-0 m-3 px-3 transition duration-300 z-10">{placeholder}</span>
        </div>
    );
}

export default Input;