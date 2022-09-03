import { HashLink as Link } from 'react-router-hash-link';

const Button = ({value, link}) => {
    return (
       <Link className=' mx-2 justify-center m-auto flex  active:bg-orange active:text-white active:opacity-70 active:shadow-2xl bg-white shadow-lg active:scale-105 text-black p-3 text-sm px-5 rounded border-2 border-orange sm:p-3 sm:px-10 mr-2' smooth to={link}>
         <button >{value}</button>
       </Link>
      );
}
 
export default Button;