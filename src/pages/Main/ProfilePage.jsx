import { useUserAuth } from "../../Auth";
import Input from "../../components/Input";
import profile from "../../asset/icon_svg/profile.svg";
import email from "../../asset/icon_svg/email.svg";
import flag from "../../asset/icon_svg/flag.svg";
import lock from "../../asset/icon_svg/lock.svg";
import { useState } from "react";
import { db } from "../../firebase-config";


import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";

import { getAuth, updateProfile } from "firebase/auth";
import {
    collection,
    getDocs,
    serverTimestamp,
    setDoc,
    doc,
} from "firebase/firestore";
import { useNavigate, Navigate } from "react-router-dom";
import VerifyPhoneNum from "../../components/VerifyPhoneNum";


const ProfilePage = () => {

    const { auth } = useUserAuth();

    console.log(auth)

    const [submit, setSubmit] = useState(false);
    const [errorM, setErrorM] = useState("");

    const navigate = useNavigate();

    const [formData, setformData] = useState({
        name: "",
        lastname: "",
        storeName: "",
        whatsappNum: "",
        timestamp: serverTimestamp(),
    });

    const { name, storeName, timestamp, whatsappNum, lastname } = formData;


    const onChange = (e) => {
        setformData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
        console.log(formData);
    };


    return (
        <div className=" pb-20">
            <div className=" signup w-full h-[200px] tablet:h-[400px] "></div>
            <div className=" max-w-[900px] m-auto  ">
                <div className=" mx-5  rounded-xl mt-[-200px] tablet:mt-[-200px] shadow-xl bg-white ">
                    

                    <div className=" relative">
                        <h1 className=" mb-5 ml-5  pt-5 text-xl font-bold mt-10 pb-2 w-[200px] ">
                            SetUp Your Store
                        </h1>
                        <span className=" w-[60px] top-14 h-[5px] bg-orange absolute left-5"></span>
                    </div>

                    <form className="p-5 " action="">
                        <div className="  grid grid-cols-1 tablet:grid-cols-2 gap-5">

                            <div className=" relative  Btablet:py-0    ">
                                <label className=" flex my-2 ">Store Url </label>
                                <div className=" flex flex-col tablet:flex-row sh tablet:items-center">
                                    <a
                                        href="https://www.eazithenga.com"
                                        className="  bg-[#D9D9D9] tablet:p-3 text-blue tablet:mr-3"
                                    >
                                        https://www.eazithenga.com/
                                    </a>
                                    <input
                                        type="text"
                                        placeholder="Store name"
                                        className=" p-2 target:p-0 main-input w-full  focus:outline-none relative
                                       bg-transparent z-20   "
                                        id="storeName"
                                        value={storeName}
                                        onChange={onChange}
                                    />
                                </div>
                                <p className="error text-xs my-2 text-red-500"></p>
                            </div>

              
                        </div>
                      
                        <button className=" px-4 py-2 my-5 bg-orange text-white rounded w-[170px] shadow-lg active:scale-105">
                            {submit ? (
                                <p className="w-5 border-[7px] border-dotted m-auto flex justify-center items-center border-white animate-spin duration-150 transition-all  relative h-5 rounded-xl"></p>
                            ) : (
                                `Submit`
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;