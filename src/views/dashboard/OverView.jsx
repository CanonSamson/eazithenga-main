import data from '../../asset/icon_svg/4.svg'

import { MdMessage, MdStore } from 'react-icons/md'
import { Link } from 'react-router-dom'

const OverView = () => {
    return (
        <div className="">
            <div className=' flex items-center  m-3  bg-white shadow-xl p-5 '>
                <img className=' w-32' src={data} alt="" />
                <div>
                    <h1 className=' text-3xl mb-3'>Eazi Thenga</h1>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
            </div>
            <div className=' hidden Btablet:grid grid-cols-2 gap-4 px-5' >
                <div className=' bg-white p-5'>
                    <h1 className=' text-4xl mb-5'>Stores</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    <button className=' py-2 text-white  bg-blue  rounded mt-5 px-5' >See More</button>
                </div>
                <div className=' bg-white p-5'>
                    <h1 className=' text-4xl mb-5'>Messages</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    <button className=' py-2 text-white  bg-blue  rounded mt-5 px-5' >See More</button>
                </div>
            </div>
            <div className=' Stablet:hidden px-5 min-h-screen'>
                <span>Notifications</span>
                <Link to="/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcccccccwjfifdashboard/stores" className=' bg-gray-200 p-5 flex items-center my-5'>
                    <MdStore size={24} />
                    <div className=' ml-5'>
                        <h1 className=' text-xl mb-1'>Stores</h1>
                    </div>
                </Link>
                <Link to="/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcccccccwjfifdashboard/messages" className=' bg-gray-200 p-5 flex items-center my-5'>
                    <MdMessage size={24} />
                    <div className=' ml-5'>
                        <h1 className=' text-xl '>Messages</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default OverView;