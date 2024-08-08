import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './Components/Navbar';  
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import FAQ from './Components/Faq';

function App()  {  
  return (  
    <Router>  
      <Navbar />  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/faq" element={<FAQ />} /> 
      </Routes>  
    </Router>  
  );  
};  

export default App;