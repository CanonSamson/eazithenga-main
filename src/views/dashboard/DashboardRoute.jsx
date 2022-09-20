//img imports
import { Outlet } from 'react-router-dom';
import logo from '../../asset/icon_svg/logo.png'
import SideBav from './SideBav';

const DashboardRoute = () => {
    return (
        <div>
            <nav className=' fixed top-0 w-full px-5 h-[70px] items-center flex shadow-xl bg-white z-30 '>
                <img className=' w-[200px]' src={logo} alt="" />
            </nav>
            <div className=' pt-[100px]'>
                <SideBav />
                <div className=' bg-gray-100 Btablet:w-[78%] h-[80%]  Btablet:absolute right-0 '>
                 <div className=' relative'>
                 <Outlet />
                 </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardRoute;