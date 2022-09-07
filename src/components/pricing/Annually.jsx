import { MdDoneAll, MdRemoveDone } from "react-icons/md";

import { motion } from "framer-motion";
import Button from "../Button";

const Annually = () => {
    return (
        <div>
            <motion.div initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: .35 }} className=" w-full overflow-x-auto duration-100 transition-all ">
                <div className=" flex justify-center my-10  w-[700px]  Btablet:w-[1000px] m-auto ">


                    <div className="flex flex-col justify-center shadow-xl p-10 w-[350px] mx-5  relative h-[60 0px] rounded-xl">
                        <p className=" bg-orange text-white text-xl absolute top-[-10px] left-[-10px] py-2 px-3 rounded  uppercase">Professional</p>
                        <div className="flex justify-center  mt-3 items-end ">
                            <span className=" text-5xl font-bold">R</span>
                            <span className=" text-6xl font-bold ml-[2px]">2000</span>
                            <span className=" absolute  
                             border-dashed flex justify-center animate-pulse items-center 
                             text-xl font-bold rounded-full text-orange  right-5 top-2">20% OFF</span>
                        </div>
                        <div className=" flex flex-col ">

                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm ">Store Catalog</p>
                            </div>

                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm ">Linked with Whatsapp Catalog</p>
                            </div>

                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm ">Upload up to 100 products</p>
                            </div>

                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm "> Linked with Facebook Catalog</p>
                            </div>

                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm ">Payment Gateway</p>
                            </div>


                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm ">Chat Automation</p>
                            </div>


                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm "> Order Management</p>
                            </div>
                            <div className=" my-5 ">
                                <Button link="" value="Sign Up " />
                            </div>
                        </div>
                    </div>




                    <div className="flex flex-col justify-center shadow-xl p-10 w-[350px] mx-5  relative h-[60 0px] rounded-xl">
                        <p className=" bg-orange text-white text-xl absolute top-[-10px] right-[-10px] py-2 px-3 rounded ">BASIC</p>
                        <div className="flex justify-center  mt-3 items-end ">
                            <span className=" text-5xl font-bold"></span>
                            <span className=" text-6xl font-bold ml-[2px]">FREE</span>
                        </div>
                        <div className=" flex flex-col ">

                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm ">Store Catalog</p>
                            </div>

                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm ">Linked with Whatsapp Catalog</p>
                            </div>

                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm ">Upload up to 10 products</p>
                            </div>

                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full border-dashed border-2 border-orange text-orange">
                                    <MdDoneAll />
                                </div>
                                <p className=" text-sm "> Linked with Facebook Catalog</p>
                            </div>

                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full">
                                    <MdRemoveDone />
                                </div>
                                <p className=" text-sm ">Payment Gateway</p>
                            </div>


                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full">
                                    <MdRemoveDone />
                                </div>
                                <p className=" text-sm ">Chat Automation</p>
                            </div>


                            <div className=" flex mt-5 border-b pb-3 items-center">
                                <div className=" mr-3 p-1 rounded-full">
                                    <MdRemoveDone />
                                </div>
                                <p className=" text-sm "> Order Management</p>
                            </div>

                            <div className=" my-5 ">
                                <Button link="" value="Sign Up " />
                            </div>
                        </div>
                    </div>







                </div>
            </motion.div>
        </div>
    );
}

export default Annually;