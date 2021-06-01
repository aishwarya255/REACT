import React from 'react';
import useForm from './UseForm';
import validate from './validateInfo';
import './Form.css';

const Formsignup = ({submitForm}) => {

const{handleChange, values,handleSubmit, errors} = useForm(submitForm, validate);




    return (
      <div className="form-content-right">
          <form className="form" onSubmit={handleSubmit}>
              <h1><b>Get strted with us today! Create your account by 
                  filling out the information below</b></h1>
           <br></br>
                <div className="form-label">
                    UserName
                </div>
            <input id="username" type="text" name="username"   placeholder="Enter Your UserName" value={values.username} onChange={handleChange}  className="form-input"/>
              <div className="req">
                  {errors.username && <p>{errors.username}</p>}
                  </div> 
           
               <div className="form-label">
                    Email
                </div>
            <input id="email" type="email" name="email" placeholder="Enter Your Email_id" value={values.email} onChange={handleChange}  className="form-input"/>
            <div className="req">
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-label">
                    Password
                </div>
            <input id="password" type="password" name="password" placeholder="Enter Your Password" value={values.password} onChange={handleChange}  className="form-input"/>
            <div className="req">   
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-label">
                   Contact Number
                </div>
            <input id="phoneno" type="int" name="phoneno" placeholder="Enter Your Phone_no" value={values.phoneno} onChange={handleChange}  className="form-input"/>
            <div className="req"> 
                {errors.phoneno && <p>{errors.phoneno}</p>}
            </div>
            <br></br>
            <button className="smt" type="submit">SignUp</button>
            <span className="form-input-login">Already have an account? login
            <a href="#">....Here....</a></span>
          </form>
      </div>
    );
};

export default Formsignup;

