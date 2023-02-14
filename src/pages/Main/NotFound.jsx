import data from '../../asset/icon_svg/4.svg'
import Button from '../../components/Button';

const NotFound = () => {
    return (
        <div className=" h-screen flex flex-col justify-center items-center w-full">
            <img className=' w-[70%] max-w-[500px] ' src={data} alt="" />
            <h1 className=" text-5xl ">404</h1>
            <p className=' text-center w-[70%] mx-auto'>the route you're looking for can't be found  please go back to  home page</p>
            <div className=' mt-3'>
                <Button value="Home Page!" link="/" />
            </div>
        </div>
    );
}

export default NotFound;