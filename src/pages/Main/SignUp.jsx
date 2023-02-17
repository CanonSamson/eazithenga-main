import Input from "../../components/Input";
import profile from "../../asset/icon_svg/profile.svg";
import email from "../../asset/icon_svg/email.svg";
import flag from "../../asset/icon_svg/flag.svg";
import lock from "../../asset/icon_svg/lock.svg";
import { useState } from "react";
import { db } from "../../firebase-config";


import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";

import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import {
  collection,
  getDocs,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { useNavigate, Navigate } from "react-router-dom";
import VerifyPhoneNum from "../../components/VerifyPhoneNum";


const SignUp = () => {
  const [submit, setSubmit] = useState(false);
  const [errorM, setErrorM] = useState("");
  const [phPop, setPhPop] = useState(false)

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    name: "",
    lastname: "",
    storeName: "",
    email: "",
    whatsappNum: "",
    timestamp: serverTimestamp(),
  });

  const { name, email, password, storeName, timestamp, whatsappNum, lastname } =
    formData;

  const auth = getAuth();

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    console.log(formData);
  };


  function onCaptchverify() {

    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignUp();
      }
    }, auth);


  }
  const appVerifier = window.recaptchaVerifier;



  const onSignUp = async (e) => {
    setSubmit(!submit);
    e.preventDefault();

    try {

      onCaptchverify()
      // const phoneNumber = getPhoneNumberFromUserInput();

      setPhPop(true)

    } catch (error) {
      console.log(error);

      setSubmit(submit);
    }
  };

  const VerifyPhoneNum = async (e) => {
    e.preventDefault();

    try {

      const confirmationResult = await signInWithPhoneNumber(auth, formData.whatsappNum, appVerifier)

      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
      setPhPop(false)

    } catch (error) {
      console.log(error);

    }
  };


  console.log(formData);
  return !auth.currentUser ?
    <div className=" pb-20">
      <div className=" signup w-full h-[200px] tablet:h-[400px] "></div>
      <div className=" max-w-[900px] m-auto  ">
        <div className=" mx-5  rounded-xl mt-[-70px] tablet:mt-[-200px] shadow-xl bg-white rounded-t-3xl">
          <div className="text rounded-t-3xl  ">
            <div className=" signup-text w-full tablet:h-[150px] p-4 rounded-t-3xl items-center  flex">
              <p className=" font-semibold tablet:text-3xl ">
                Step Into The Future With Eazi Thenga,
                <br /> Set Up Your Store In A Breeze!
              </p>
            </div>
          </div>

          <div className=" relative">
            <h1 className=" mb-5 ml-5 text-2xl font-bold mt-10 pb-2 w-[100px] ">
              Sign Up
            </h1>
            <span className=" w-[60px] top-10 h-[10px] bg-orange absolute left-5"></span>
          </div>

          <form onSubmit={onSubmit} className="p-5 " action="">
            <h2 className=" font-semibold text-xl ">Personal Information</h2>
            <div className="  grid grid-cols-1 tablet:grid-cols-2 gap-5">
              <Input
                label="First Name"
                id="name"
                type="text"
                value={name}
                placeholder="Name"
                errorMessage="first name should be 3-16 characters and shouldn't include any special character!"
                require="*"
                icon={profile}
                onChange={onChange}
                required={true}
              />
              <Input
                label="First Name"
                id="lastname"
                value={lastname}
                type="text"
                placeholder="Last Name"
                errorMessage="last name should be 3-16 characters and shouldn't include any special character!"
                require="*"
                icon={profile}
                onChange={onChange}
                required={true}
              />

              <Input
                label="Email Address"
                type="text"
                id="email"
                value={email}
                placeholder="example@email.com"
                errorMessage=""
                require=""
                icon={email}
                onChange={onChange}
              />

              <Input
                label="Whatsapp Number"
                id="whatsappNum"
                type="tel"
                code="+27"
                value={whatsappNum}
                placeholder="60 07487 15"
                errorMessage="Whatsapp Number should be a vaild SA number don't include + "
                pattern="^\d{11}$"
                require="*"
                icon={flag}
                onChange={onChange}
                required={true}
              />
            </div>

            <div className=" mt-20">
              <h2 className=" font-semibold text-xl mb-5">
                Additional Information
              </h2>
              <div className=" relative  Btablet:py-0    ">
                <label className=" flex my-2 text-lg">Store Url </label>
                <div className=" flex flex-col tablet:flex-row sh tablet:items-center">
                  <a
                    href="https://www.eazithenga.com"
                    className="  bg-[#D9D9D9] tablet:p-3 text-blue tablet:mr-3"
                  >
                    https://www.eazithenga.com/
                  </a>
                  <input
                    type="text"
                    placeholder="Enter  Store Url"
                    className=" p-2 target:p-0 main-input w-full  focus:outline-none relative
                                     bg-transparent z-20   "
                    id="storeName"
                    value={storeName}
                    onChange={onChange}
                  />
                </div>
                <p className="error text-xs my-2 text-red-500"></p>
              </div>
              <div className="  grid grid-cols-1 tablet:grid-cols-2  gap-5">
                <Input
                  label="Password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  errorMessage=""
                  require="*"
                  icon={lock}
                  onChange={onChange}
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                  errorMessage=""
                  require="*"
                  icon={lock}
                />
              </div>
            </div>
            <div className="flex items-center mt-10">
              <input className=" mr-3" type="checkbox" id="terms" required />
              <p className=" text-blue">
                I have read and agree to the Terms of Service
              </p>
            </div>
            <button className=" p-4 my-10 bg-orange text-white rounded w-[170px] shadow-lg active:scale-105">
              {submit ? (
                <p className="w-5 border-[7px] border-dotted m-auto flex justify-center items-center border-white animate-spin duration-150 transition-all  relative h-5 rounded-xl"></p>
              ) : (
                `Submit`
              )}
            </button>

            <VerifyPhoneNum phPop={phPop} />
          </form>
        </div>
      </div>
      {/* {submit && (
        <div className=" fixed w-full h-screen bg-gray-50 top-0 flex justify-center items-center mx-auto z-50 left-0 ">
          <div className=" shadow-xl p-5 max-w-[500px]  bg-white pt-20 flex flex-col   justify-center items-center relative">
            <div className=" p-4 text-white bg-orange rounded-full absolute top-[-30px]">
              <IoCheckmarkCircleSharp size={70} />
            </div>
            <h1 className=" text-2xl Stablet:text-4xl font-semibold ">
              THANK YOU
            </h1>
            <p className=" text-center my-5">
              We've received your submission and we'll be in touch soon!
            </p>
            <Link to="/">
              <button
                className=" bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black p-4 
                     text-sm rounded  border-orange sm:p-3 sm:px-10 "
              >
                KEEP EXPLORING
              </button>
            </Link>
          </div>
        </div>
      )} */}
    </div>
    :
    <Navigate to="/" />
};

export default SignUp;
