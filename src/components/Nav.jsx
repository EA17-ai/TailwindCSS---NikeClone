import {headerLogo} from '../assets/images';
import {hamburger} from "../assets/icons"
const Nav = () => {
  return (
    <header>
      <nav className="flex text-xl h-20 w-full mt-10 ml-10 justify-evenly ">
      <a href="/">
        <img src={headerLogo} alt="logo" width={130} height={29} />
      </a>
      <a href='/home' className="text-gray-600 font-medium hover:text-black-900 hover:font-bold">Home</a>
      <a href='/about' className="text-gray-600 hover:text-black-900 hover:font-bold">About us</a>
      <a href='/products' className="text-gray-600 hover:text-black-900 hover:font-bold">Products</a>
      <a href='/contact' className="text-gray-600 hover:text-black-900 hover:font-bold">Contact</a>
      <a href='/signin' className="text-gray-600 hover:text-black-900 hover:font-bold">SignIn / Explore Now</a>


      </nav>
    </header>
  );
};

export default Nav;
