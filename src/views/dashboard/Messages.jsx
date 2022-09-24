
import { IoMdArrowBack } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

import { useState, useEffect } from "react";
import { db } from "../../firebase-config"
import { collection, getDocs } from "firebase/firestore"
import { Link } from 'react-router-dom';
const Messages = () => {

    const [messages, setMessages] = useState([]);

    const usersCollectionRef = collection(db, "messages")


    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            console.log(data)
            setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUsers()
    }, []);
    const Empty = messages == 0

    return (
        <div>
            <nav className=' flex p-5  fixed w-full Btablet:w-[78%] right-0 pt-[100px] top-0  bg-white shadow  justify-between'>
                <Link to="/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcccccccwjfifdashboard" >
                    <IoMdArrowBack />
                </Link>
                <span>Message</span>
            </nav>
            {
                Empty ? <div className=' w-full h-screen flex justify-center items-center '>Loading..</div>
                    :

                    <div className='  overflow-hidden pt-[100px]   bg-gray-100 '>
                        <div className=' grid Stablet:grid-cols-2 grid-cols-1 p-3  gap-5  '>
                            {messages.map((message) => (
                                <div key={message.id} className=' bg-white p-5  '>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>Id : </span>
                                        <span>{message.id}</span>
                                    </div>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>Name: </span>
                                        <span>{message.name}</span>
                                    </div>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>Email: </span>
                                        <span>{message.email}</span>
                                    </div>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>Whatsapp Number: </span>
                                        <span>{message.whatsappname}</span>
                                    </div>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>Subject: </span>
                                        <span>{message.subject}</span>
                                    </div>
                                    <div className=' flex items-center py-3'>
                                        <span className=' mr-4'>message : </span>
                                        <span>{message.message}</span>
                                    </div>
                                    <div className=' flex  items-center justify-end '>
                                        <MdDelete />
                                        <p className=' text-[10px]'>delete</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            }
        </div>

    );
}

export default Messages;