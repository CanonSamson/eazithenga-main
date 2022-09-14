import Input from "../components/Input";
import profile from '../asset/icon_svg/profile.svg'
import email from '../asset/icon_svg/email.svg'
import flag from '../asset/icon_svg/flag.svg'
import address from '../asset/icon_svg/address.svg'
import bag from '../asset/icon_svg/bag.svg'
import lock from '../asset/icon_svg/lock.svg'

const SignUp = () => {
    const input = [
        {
            id: 1,
            label: 'Frist Name',
            placeholder: 'Frist Name',
            icon: profile,
            require: '*',
            errorMessage: '',
            pattern: '',
            type: 'text'

        },
        {
            id: 2,
            label: 'Last Name',
            placeholder: 'Last Name',
            icon: profile,
            require: '*',
            errorMessage: '',
            pattern: '',
            type: 'text'

        },
        {
            id: 3,
            label: 'Email ',
            placeholder: 'example@email.com',
            icon: email,
            require: '',
            errorMessage: '',
            pattern: '',
            type: 'email'

        },
        {
            id: 4,
            label: 'Whatsapp Number ',
            placeholder: '60 07487 15',
            icon: flag,
            require: '*',
            code: "+27",
            errorMessage: '',
            pattern: '',
            type: 'tel'
        },
    ]

    const Billinput = [
        {
            id: 1,
            label: 'Business Name ',
            placeholder: 'Enter  Business Name',
            icon: bag,
            require: '*',
            errorMessage: '',
            pattern: '',
            type: 'text'

        },
        {
            id: 2,
            label: 'Street Address',
            placeholder: 'Street Address',
            icon: address,
            require: '*',
            errorMessage: '',
            pattern: '',
            type: 'text'

        },
        {
            id: 3,
            label: 'State',
            placeholder: 'example@email.com',
            icon: email,
            require: '',
            errorMessage: '',
            pattern: '',
            type: 'text'

        },
        {
            id: 4,
            label: 'Phone Number  ',
            placeholder: '60 07487 15',
            icon: flag,
            require: '*',
            code: "+27",
            errorMessage: '',
            pattern: '',
            type: 'tel'
        },
    ]

    const password = [
        {
            id: 1,
            label: 'Choose Password',
            placeholder: 'Choose A Password',
            icon: lock,
            require: '*',
            errorMessage: '',
            pattern: '',
            type: 'password'

        },
        {
            id: 2,
            label: 'Confirm Password',
            placeholder: 'Confirm Password',
            icon: lock,
            require: '*',
            errorMessage: '',
            pattern: '',
            type: 'password'

        },

    ]
    return (
        <div className=" pb-20" >
            <div id="signup" className=' signup w-full h-[200px] tablet:h-[400px] '></div>
            <div className=" max-w-[900px] m-auto  ">
                <div className=" mx-5  rounded-xl mt-[-70px] tablet:mt-[-200px] shadow-xl bg-white rounded-t-3xl">
                    <div className="text rounded-t-3xl  ">
                        <div className=" signup-text w-full tablet:h-[150px] p-4 rounded-t-3xl items-center  flex">
                            <p className=" font-semibold tablet:text-3xl ">Step Into The Future With Eazi Thenga,<br /> Set Up Your Store In A Breeze!</p>
                        </div>
                    </div>

                    <div className=" relative">
                        <h1 className=" mb-5 ml-5 text-2xl font-bold mt-10 pb-2 w-[100px] ">Sign Up</h1>
                        <span className=" w-[60px] top-10 h-[10px] bg-orange absolute left-5"></span>
                    </div>
                    <form className="p-5 " action="">
                        <h2 className=" font-semibold text-xl ">Personal Information</h2>
                        <div className="  grid grid-cols-1 tablet:grid-cols-2 gap-5" >
                            {
                                input.map((input) => (
                                    <Input key={input.id} label={input.label}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        errorMessage={input.errorMessage}
                                        pattern={input.pattern}
                                        require={input.require}
                                        icon={input.icon} code={input.code} />
                                ))
                            }

                        </div>
                        <div className=" mt-20">
                            <h2 className=" font-semibold text-xl mb-5">Billing Address</h2>
                            <div className="  grid grid-cols-1 tablet:grid-cols-2  gap-5" >
                                {
                                    Billinput.map((input) => (
                                        <Input key={input.id} label={input.label}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            errorMessage={input.errorMessage}
                                            pattern={input.pattern}
                                            require={input.require}
                                            icon={input.icon} code={input.code} />
                                    ))
                                }

                            </div>
                        </div>

                        <div className=" mt-20">
                            <h2 className=" font-semibold text-xl mb-5">Additional Information</h2>
                            <div className=" relative  Btablet:py-0    ">
                                <label className=" flex my-2 text-lg">Store Url </label>
                                <div className=" flex flex-col tablet:flex-row sh tablet:items-center">
                                    <a href="https://www.eazithenga.com" className="  bg-[#D9D9D9] tablet:p-3 text-blue tablet:mr-3">https://www.eazithenga.com/</a>
                                    <input key={input.id} type="text" placeholder="Enter  Store Url" className=" p-2 target:p-0 main-input w-full  focus:outline-none relative
                                     bg-transparent z-20  "/>
                                </div>
                                <p className="error text-xs my-2 text-red-500"></p>
                            </div>
                            <div className="  grid grid-cols-1 tablet:grid-cols-2  gap-5" >
                                {
                                    password.map((input) => (
                                        <Input key={input.id} label={input.label}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            errorMessage={input.errorMessage}
                                            pattern={input.pattern}
                                            require={input.require}
                                            icon={input.icon} code={input.code} />
                                    ))
                                }

                            </div>
                        </div>
                        <div className="flex items-center mt-10">
                            <input key={input.id} className=" mr-3" type="checkbox" name="" id="" />
                            <p className=" text-blue">I have read and agree to the Terms of Service</p>
                        </div>
                        <button className=" p-4 my-10 bg-orange text-white rounded-r-xl w-[150px]">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;