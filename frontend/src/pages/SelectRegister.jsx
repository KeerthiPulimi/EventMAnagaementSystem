import React, { useState } from 'react'
import RegisterStudent from './admin/RegisterStudent';
import RegisterFaculty from './faculty/RegisterFaculty';
import { Link } from 'react-router-dom';

const SelectRegister = () => {
    const [showLogin, setShowLlogin]=useState("home");
    const clickLogin=(elem)=>{
      setShowLlogin(elem)
    }
      return (
        <div>
            {showLogin==="home"&& <div className="main">
    
    <div className="page">
    <Link to="/"><i class="fa-solid fa-angle-left back text-white"></i></Link>&nbsp;<Link className=' text-decoration-none text-white'> Back</Link>
    {/* <button className='btn-close btn-close-white close-button '></button> */}
    <div className="boxes-container"> {/* Added container for horizontal layout */}
    
              <div className="box" onClick={() => clickLogin("student")}>
                <img src="/student.png" alt="" className="diagram" />
                <h3 className="titles">
                  <Link className="text-decoration-none text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student</Link>
                </h3>
              </div>
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="box" onClick={() => clickLogin("faculty")}>
                <img src="/teacher.png" alt="" className="diagram" />
                <h3 className="titles">
                  <Link className="text-decoration-none text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faculty</Link>
                </h3>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div> {/* Closing container for horizontal layout */}
    &nbsp;
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <h3 className='singup 'style={{ textAlign: 'left', marginLeft: '32px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already Registered? &nbsp;<Link to="/selectSignIn" className=' text-decoration-none text-white color:blue'>Sign In</Link></h3>
    </div>
    
      </div>
      }
      {showLogin==="student"&&<RegisterStudent/>} 
      {
        showLogin==="faculty"&&<RegisterFaculty/>
      }
     
        </div>
      )
}

export default SelectRegister