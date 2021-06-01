import React, {useState} from 'react';
import Formsignup from './Formsignup';
import Formsuccess from './Formsuccess';

import './Form.css'

const Form = () => {
    const[isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        
        <div className = "form-container">   <span className="close-btn">X</span> 
         
         <div className="form-content-left">  
      <div className="mrq"> <marquee direction="right"  ><h1><b>SIGNUP HERE</b></h1></marquee></div> 
         </div>  
         
        {!isSubmitted ? <Formsignup submitForm={submitForm} /> : <Formsuccess />}
         </div> 
       
       
        ) ; 
          
};

export default Form;

