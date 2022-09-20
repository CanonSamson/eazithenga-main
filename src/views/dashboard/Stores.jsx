
import { IoMdArrowBack } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

import { useState, useEffect } from "react";
import { db } from "../../firebase-config"
import { collection, getDocs, addDoc } from "firebase/firestore"
import { Link } from 'react-router-dom';
const Stores = () => {

    const [stores, setStores] = useState([]);

    const usersCollectionRef = collection(db, "stores")


    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            console.log(data)
            setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    }, []);

    if (stores == 0) {
        return <div className=' mt-[100px]'>Loading..</div>
    }
    return (
        <div>
            <nav className=' flex p-5  fixed w-full Stablet:w-[78%] right-0 pt-[100px] top-0  bg-white shadow  justify-between'>
                <Link to="/dashboard" >
                    <IoMdArrowBack />
                </Link>
                <span>Stores</span>
            </nav>

            <div className='  overflow-hidden pt-[100px]   bg-gray-100 '>
                <div className=' grid grid-cols-1 laptop:grid-cols-2 p-3  gap-5  '>
                    {stores.map((message) => (
                        <div key={message.id} className=' bg-white p-5  '>
                            <div className=' flex items-center py-3'>
                                <span className=' mr-4'>Store Id : </span>
                                <span>{message.id}</span>
                            </div>

                            <div className=' flex items-center py-3'>
                                <span className=' mr-4'> First Name: </span>
                                <span>{message.firstname} {message.lastname}</span>
                            </div>
                            <div className=' flex items-center py-3'>
                                <span className=' mr-4'>Email: </span>
                                <span>{message.email}</span>
                            </div>
                            <div className=' flex items-center py-3'>
                                <span className=' mr-4'>Whatsapp Number: </span>
                                <span>{message.whatsappnumber}</span>
                            </div>
                            <div className=' flex items-center py-3'>
                                <span className=' mr-4'>Store Name: </span>
                                <span>{message.storename}</span>
                            </div>
                            <div className=' flex items-center py-3'>
                                <span className=' mr-4'>Password : </span>
                                <span>{message.password}</span>
                            </div>
                            <div className=' flex  items-center justify-end '>
                                <MdDelete />
                                <p className=' text-[10px]'>delete</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Stores;