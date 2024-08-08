import React, { useState, useEffect } from 'react';  
import { Link } from 'react-router-dom';  
import HeaderLogo from './ChangeMode/HeaderLogo';  
import WhiteMode from './ChangeMode/WhiteMode';  
import DarkMode from './ChangeMode/DarkMode';  

const Navbar = () => {  
  const [isDayMode, setIsDayMode] = useState(true);  

  const toggleMode = () => {  
    setIsDayMode(!isDayMode);  
  };  

  useEffect(() => {  
    if (isDayMode) {  
      document.body.classList.add('bg-white', 'text-black');   
      document.body.classList.remove('bg-gray-800', 'text-white');   
    } else {  
      document.body.classList.remove('bg-white', 'text-black');   
      document.body.classList.add('bg-gray-800', 'text-white');   
    }  
  }, [isDayMode]);  

  return (  
    <nav className="flex justify-center items-center p-4 gap-96">  
      <div className="text-blue-500"><HeaderLogo/></div>  
      <div className="flex space-x-4 font-bold">  
        <Link to="/" className="hover:text-blue-500">Home</Link>  
        <Link to="/about" className="hover:text-blue-500">About</Link>  
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>  
        <Link to="/faq" className="hover:text-blue-500">FAQ</Link> 
      </div>  
      <div className="flex items-center space-x-2">  
        <button onClick={toggleMode} className="focus:outline-none">  
          {isDayMode ? (  
            <WhiteMode className="fill-current text-black"/>  
          ) : (  
            <DarkMode className="fill-current text-white"/>  
          )}  
        </button>  
      </div>    
    </nav>  
  );  
};  

export default Navbar;