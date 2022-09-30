
import { IoMdArrowBack } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { db } from "../../firebase-config"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { Link } from 'react-router-dom';
const Stores = () => {

    const [stores, setStores] = useState([]);

    const usersCollectionRef = collection(db, "stores")

    const DeleteStore = async (id) => {
        const storeDoc = doc(db, "stores", id)
        await deleteDoc(storeDoc)
    }
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            console.log(data)
            setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    }, [DeleteStore]);

    const Empty = stores == 0
    // if (stores == 0) {
    //     return <div className=' w-full h-screen flex justify-center items-center '>Loading..</div>
    // }
    return (
        <div>
            <nav className=' flex p-5  fixed w-full Stablet:w-[78%] right-0 pt-[100px] top-0  bg-white shadow  justify-between'>
                <Link to="/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcccccccwjfifdashboard" >
                    <IoMdArrowBack />
                </Link>
                <span>Stores</span>
            </nav>

            {
                Empty ? <div className=' w-full h-screen flex justify-center items-center '>Loading..</div>
                    :

                    <div className='  overflow-hidden pt-[100px]   bg-gray-100 '>
                        <div className=' grid grid-cols-1 laptop:grid-cols-2 p-3  gap-5  '>
                            {stores.map((store) => (
                                <motion.div initial={{ y: 100, }} animate={{ y: 0 }} exit={{ y: 200 }} key={store.id} className=' bg-white p-5  '>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>Store Id : </span>
                                        <span>{store.id}</span>
                                    </div>

                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'> First Name: </span>
                                        <span>{store.firstname} {store.lastname}</span>
                                    </div>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>Email: </span>
                                        <span>{store.email}</span>
                                    </div>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>Whatsapp Number: </span>
                                        <span>{store.whatsappnumber}</span>
                                    </div>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>Store Name: </span>
                                        <span>{store.storename}</span>
                                    </div>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>Password : </span>
                                        <span>{store.password}</span>
                                    </div>
                                    <div onClick={() => { DeleteStore(store.id) }} className=' flex  hover:cursor-pointer items-center justify-end '>
                                        <MdDelete />
                                        <p className=' hover:cursor-pointer text-[10px]'>delete</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
            }
        </div >

    );
}

export default Stores;