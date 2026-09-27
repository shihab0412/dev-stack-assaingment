import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
     <nav className = "flex justify-between items-center container mx-auto px-4 py-3 bg-white">
        <img src={logo} alt="Logo" />


        <ul className="flex  gap-6 items-center text-gray-700 ">
            <li className="text-[#eb2c95] font-medium">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      
      <div className="flex items-center gap-4">
        <button className="text-gray-800 font-medium py-2 px-4 transition">
          Sign In
        </button>
        <button className="bg-[#EC4899] text-white font-medium py-2 px-5 rounded-full ">
          Sign Up
        </button>
      </div>
     </nav>
    );
};

export default Nav;