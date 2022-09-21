import { HashLink as Link } from 'react-router-hash-link';

const Button = ({ value, link }) => {
  return (
    <Link className=' mx-2 justify-center m-auto flex bg-blue active:opacity-70 active:shadow-2xl font-bold
        text-white shadow-lg active:scale-105  p-3 px-5  sm:p-3 sm:px-10 mr-2' smooth to={link}>
      <button >{value}</button>
    </Link>
  );
}

export default Button;

