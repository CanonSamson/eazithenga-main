
// import { MdDoneAll, MdRemoveDone } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Pricing = () => {

    function NavLink({
        to,
        className,
        activeClassName,
        inActiveClassName,
        ...rest
    }) {

        let location = useLocation();
        let isActive = location.pathname === to;

        let allClassNames =
            className + (isActive ? ` ${activeClassName}` : `${inActiveClassName}`);
        return <Link className={allClassNames} to={to} {...rest} />
    }


    return (
        <div className=" relative">
            <div>
                <div className=" flex  justify-center my-5">
                    <NavLink activeClassName="bg-orange text-white" inActiveClassName=" text-black" className='  active:bg-orange active:text-white active:opacity-70 active:shadow-2xl bg-white shadow-lg active:scale-105  p-3 text-sm px-5 rounded-l-xl border-2 border-orange sm:p-3 sm:px-10 mr-2' to="/">
                        <button >Monthly </button>
                    </NavLink>
                    <NavLink activeClassName="bg-orange text-white" inActiveClassName=" text-black" className='   active:bg-transparent  active:opacity-70 active:shadow-2xl shadow-lg active:scale-105 active:text-black p-3 text-sm px-5 rounded-r-xl border-2 border-orange sm:p-3 sm:px-10 mr-2' to="/annually">
                        <button>Annualy</button>
                    </NavLink>
                </div>
            </div>

            <Outlet />

            <div>
                <span className=" w-5 h-5 rounded bg-orange absolute bottom-0"></span>
                <span className=" w-5 h-5 rounded bg-orange absolute right-0 bottom-0"></span>
            </div>
        </div>
    );
}

export default Pricing;