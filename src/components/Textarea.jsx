const Textarea = ({placeholder}) => {
    return ( 
        <div className=" relative ">
        <textarea className=" main-input w-full p-3 border border-black border-opacity-60 focus:outline-none relative bg-transparent z-20 rounded text-black" alt="" required />
        <span className="text-input absolute left-0 m-3 px-3 transition duration-300 z-10">{placeholder}</span>
    </div>
     );
}
 
export default Textarea;