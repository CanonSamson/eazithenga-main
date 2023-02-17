
//components
import Button from "../../components/Button";
import Input from "../../components/Input";

//images
import lock from "../../asset/icon_svg/lock.svg";
import flag from "../../asset/icon_svg/flag.svg";


import { useState } from "react";

import { Link, useNavigate, Navigate } from "react-router-dom";


import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserAuth } from "../../Auth";


function Login() {

  const [submit, setSubmit] = useState(false)
  const [errorM, setErrorM] = useState('')
  const [errorP, setErrorP] = useState('')


  // const [showPassword, setShowPassword] = useState(true)

  const navigate = useNavigate()


  const [formData, setformData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = formData
  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const { auth } = useUserAuth();

  const onSubmit = async (e) => {
    setSubmit(!submit)
    e.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if (userCredential.user) {
        navigate("/")
      }
    } catch (error) {
      setSubmit(false)
      console.log(error.message)

      if (error.message === `Firebase: Error (auth/user-not-found).`) {
        setErrorM("Sorry This User Is Not Register")

        // WhatsApp Number must be a vaild SF telephone number (11 digits), don't include + 
      }

      if (error.message === `Firebase: Error (auth/wrong-password).`) {
        setErrorP('incorrect password pls try again')
      }

      if (error.message === `Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).`) {
        setErrorM('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.')
      }
    }

  }
  console.log(errorM)



  return !auth.currentUser ?
    <div>
      <div className=" p-5 h-screen w-full flex flex-col justify-center items-center">
        <span className=" bg-slate-100 w-10 h-10 text-xl absolute left-[10%] z-20 top-4 shadow-lg">
        </span>
        <span className=" bg-orange-40 w-10 h-10 text-xl absolute left-[20%] z-20 top-10 shadow-lg">
        </span>

        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4 flex flex-col w-[100%] max-w-[500px]">
          <h1 className=" text-2xl font-semibold mb-5">Log In</h1>
          <div className="mb-4 gap-5 grid pb-5">
            <Input
              type="email"
              placeholder="60 07487 15"
              id="email"
              label="WhatsApp Number"
              require="*"
              code="+27"
              icon={flag}
              errorMessage={errorM}
              value={email}
              onChange={onChange}
            // pattern="^\d{11}$"
            />

            <Input
              type="password"
              id="password"
              placeholder="Password"
              errorMessage={errorP}
              value={password}
              lable="Password"
              icon={lock}
              onChange={onChange}
            // pattern="^\d{11}$"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mx-2 justify-center m-auto flex bg-blue active:opacity-70 active:shadow-2xl font-bold
        text-white shadow-lg active:scale-105  p-3 px-5  sm:p-3 sm:px-10 mr-2">
              {submit ? (
                <p className="w-5 border-[7px] border-dotted m-auto flex justify-center items-center border-white animate-spin duration-150 transition-all  relative h-5 rounded-xl"></p>
              ) : (
                `Log In`
              )}
            </button>

            <Link
              className="inline-block align-baseline text-sm text-orange hover:text-orange/40"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        <span
          className="inline-block align-baseline font-bold text-sm text-black"
          to="#"
        >
          Don't have an account{" "}
          <Link className=" text-orange hover:text-orange/40" to="/signup">
            Sign Up
          </Link>
        </span>
        <span className=" bg-slate-100 w-10 h-10 text-xl absolute right-[10%] z-20 bottom-4 shadow-lg">
          {" "}
        </span>
        <span className=" bg-orange-40 w-10 h-10 text-xl absolute right-[20%] z-20 bottom-10 shadow-lg">
          {" "}
        </span>
      </div>
    </div>
    :
    <Navigate to="/" />
}

export default Login;
