import flag from "../asset/icon_svg/flag.svg";
import phoneC from "../asset/icon_svg/phoneC.svg";

import OtpInput from "otp-input-react"
import { useEffect, useState } from "react";
import profile from "../asset/icon_svg/profile.svg";
import lock from "../asset/icon_svg/lock.svg";

import { Link, useNavigate, Navigate } from "react-router-dom";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import Input from "./Input";

const VerifyPhoneNum = ({ phPop }) => {

    const [otp, setOtp] = useState('')
    const [verify, setVerify] = useState(false)

    const [errorN, setErrorN] = useState('')

    const navigate = useNavigate()

    const [formData, setformData] = useState({
        password: "",
        StoreName: "",
        whatsappName: "",
    });

    const { password, StoreName, whatsappName } = formData;


    const onChange = (e) => {
        setformData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
        console.log(formData);
    };


    const auth = getAuth();

    function onCaptchverify() {

        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
                'size': 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    onSignUp();
                }
            }, auth);
        }


    }



    async function onSignUp() {
        setVerify(true)
        console.log(whatsappName);

    }



    const onVerify = async (e) => {
        e.preventDefault();

        onCaptchverify()

        const appVerifier = window.recaptchaVerifier;
        const phoneNumber = `+234${whatsappName}`
        console.log(phoneNumber)

        try {

            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier)

            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
            // const credential = await confirmationResult.confirm(verificationCode);

            setVerify(true)
        } catch (err) {

            setVerify(false)
            console.log(err.message);
            if (err.message === `Firebase: TOO_SHORT (auth/invalid-phone-number).`) {
                setErrorN("WhatsApp Number must be a vaild SF telephone number (11 digits), don't include + ")

            }
            if (err.message === `Firebase: TOO_SHORT (auth/invalid-phone-number).`) {
                setErrorN("WhatsApp Number must be a vaild SF telephone number (11 digits), don't include + ")

            }

            if (err.message === `Firebase: Error (auth/too-many-requests).`) {
                setErrorN(" too-many-requests ")

            }
           

            grecaptcha.reset(window.recaptchaWidgetId);

            // Or, if you haven't stored the widget ID:
            window.recaptchaVerifier.render().then(function (widgetId) {
                grecaptcha.reset(widgetId);
            });

        }
    
    };

    function onOTPVerify() {
        window.confirmationResult.confirm(otp).then(async (res) => {
            console.log(res.user)
            navigate("/profile")
        })
            .catch((err) => {
                console.log(err.message)


            })
    }

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return !auth.currentUser ?
        <div className=" relative">

            <form className={`${verify ? " top-0 left-0 h-screen p-5  flex flex-col justify-center items-center  z-50 w-full" : " hidden "}`} onSubmit={onVerify}>
                <div className=" bg-gray-50 shadow-lg flex flex-col justify-center mx-auto items-center rounded-lg p-3 w-full " >
                    <h1 className="text-center text-xl text-blue font-semibold">Verify Your Phone Number</h1>
                    <div >
                        <OtpInput
                            OTPLength={6}
                            value={otp}
                            onChange={setOtp}
                            otpType="number"
                            disabled={false}
                            autoFocus
                            className="opt-container "
                        ></OtpInput>

                        <button onClick={onOTPVerify} className=" mt-10 bg-blue  text-white  px-5 py-2 ">Verify OTP</button>

                    </div>
                </div>

            </form>


            <form onSubmit={onVerify}>
                <div className={` ${verify ? " hidden" : "top-0 left-0 h-screen p-5 bg-white flex justify-center items-center  z-50 w-full"}`}>
                    <div className=" shadow-lg   rounded-lg py-14 p-3 w-full relative">


                        <Input
                            label="Whatsapp Number"
                            id="whatsappName"
                            type="tel"
                            code="+27"
                            value={whatsappName}
                            placeholder="60 07487 15"
                            errorMessage={errorN}
                            require="*"
                            icon={flag}
                            onChange={onChange}
                            required={true}
                        />

                        <button id="sign-in-button" className=" z-50 relative sign-in-button"></button>

                        <button onClick={onSignUp} className=" mt-10 bg-blue  text-white  px-5 py-2 ">Sign In</button>

                    </div>
                </div>

            </form>
        </div>
    :
    <Navigate to="/profile" />
}

export default VerifyPhoneNum;