import React from 'react';  

const About = () => {  
  return (  
    <div className="flex flex-col items-center mt-44">  
      <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />  
      </svg>  
      <p className="mt-2 text-4xl font-bold">About</p>  
    </div>  
  );  
};  

export default About;