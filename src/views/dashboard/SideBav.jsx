
import { MdDashboard, MdMessage, MdStore } from 'react-icons/md'
import { Link } from 'react-router-dom';

const SideBav = () => {

    return (
        <div className=" hidden  h-[80vh] w-[20%]  bg-orange  left-0 overflow-hidden  Btablet:flex items-center justify-center pt-10  fixed ">
            <div>
                <Link to="/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcccccccwjfifdashboard" className=' text-white  flex items-center py-4'>
                    <MdDashboard size={48} />
                    <span>OverView</span>
                </Link>
                <Link to="/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcccccccwjfifdashboard/stores" className=' text-white  flex items-center py-4'>
                    <MdStore size={48} />
                    <span>Stores</span>
                </Link>
                <Link to="/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcccccccwjfifdashboard/messages" className=' text-white  flex items-center py-4'>
                    <MdMessage size={48} />
                    <span>Message</span>
                </Link>
            </div>
        </div>
    );
}

export default SideBav;