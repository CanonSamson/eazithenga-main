
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import Annually from './Annually';
import Monthly from './Monthly';

const Pricing = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className=" relative">
            <div id="pi" className=" w-full h-[10px]"></div>
            <div>
                <div className=" flex  justify-center my-5">
                    <div onClick={() => {setToggle(false)}} 
                    className={`${toggle ? "text-black" :"bg-orange text-white" } active:bg-transparent  active:opacity-70 active:shadow-2xl shadow-lg active:scale-105 active:text-black p-3 text-sm px-5 rounded-l-xl border-2 border-orange sm:p-3 sm:px-10 mr-2`} >
                        <button >MONTHLY </button>
                    </div>
                    <div onClick={() => {setToggle(true)}} 
                     className={`${toggle ? "bg-orange text-white": " text-black"}  active:bg-transparent  active:opacity-70 active:shadow-2xl shadow-lg active:scale-105 active:text-black p-3 text-sm px-5 rounded-r-xl border-2 border-orange sm:p-3 sm:px-10 mr-2`} >
                        <button>ANNUALY</button>
                    </div>
                </div>
            </div>
            {toggle ?  <Annually/> : <Monthly />}
            <div>
                <span className=" w-5 h-5 rounded bg-orange absolute bottom-0"></span>
                <span className=" w-5 h-5 rounded bg-orange absolute right-0 bottom-0"></span>
            </div>
        </div>
    );
}

export default Pricing;