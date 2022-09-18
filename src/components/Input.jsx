
const Input = (props) => {
    const {label, icon, code,  require, errorMessage, onChange, id, ...inputProps } = props;
    return (
        <div className=" relative  Btablet:py-0    ">
            <label className=" flex my-2 text-lg">{label} <p className=" text-red-600">{require}</p></label>
            <div className=" flex sh pl-3 py-1 items-center">
                <img className="w-[24px]" src={icon} alt="" />
                <p className="mx-2">{code}</p>
                <input {...inputProps} onChange={onChange}
                    className=" main-input w-full p-3  focus:outline-none relative
                    bg-transparent z-20  text-black" />
            </div>
            <p className="error text-xs my-2 text-red-500">{errorMessage}</p>
        </div>
    );
}

export default Input;