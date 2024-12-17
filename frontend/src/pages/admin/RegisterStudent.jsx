import React, { useState } from 'react'
// import './Register.css'
import "../../css/style.css"
import { useForm } from 'react-hook-form'
import AxiosAPI from '../AxiosAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CgAsterisk } from "react-icons/cg";
const RegisterStudent = () => {
  const regStudentForm=useForm();
  const navigateTo=useNavigate();
  const { register:register1, handleSubmit:handleSubmit1 , formState:formState1}=regStudentForm;
  const {errors}=formState1;
  const [image ,setImage]=useState();
  const handleImage=(e)=>setImage(e.target.files[0]);
  const [isLoading, setIsLoading]=useState(false);
  const handleRegister=async(data)=>{
    setIsLoading(true);
    const formData=new FormData();
    for(let [key, value] of Object.entries(data)){
      formData.append(key, value);
    }
    formData.append("Avatar", image);
    try {
      await AxiosAPI.post("user/registerUser", formData).then((response)=>{ 
        console.log(response.data.newUser._id, 'register respo')
    setIsLoading(false);
   navigateTo(`/checkmail/${response.data.newUser._id}`)
    })
    } catch (error) {
      toast.error(error.response.data.message);
   

  
      console.log(error.response.data.message, "backend error");
    }

  }
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div>
        <div className='back-color'>
        <div className="register">
            {isLoading?<i className="fa-solid fa-spinner fa-spin text-white fs-3 spinners"></i>:""}
        {/* <i class="fa-solid fa-chevron-left text-white ms-3 " ></i> */}
            <h3 className='register-title'> Registration Form</h3>
          
            <form   className='forms' onSubmit={handleSubmit1(handleRegister)} encType='multipart/file'>
                <label className='input-name'>Name<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs'
                {
                  ...register1("name", {
                    required:"This field is required"
                  })
                }
                />
                {errors.name&&<p className="text-danger input-name">{errors.name.message}</p>}

                <br/><br />
                <label className='input-name'>Email<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="email" className='inputs' 
                {
                  ...register1("email", {
                    required:"This field is required"
                  })
                }
                value={email}
                onChange={handleEmailChange}
                style={{
                  borderColor: /\b[A-Za-z0-9._%+-]+@ksrmce\.ac\.in\b/.test(email) ? 'green' : 'red'
                }}
              />
              {/\b[A-Za-z0-9._%+-]+@ksrmce\.ac\.in\b/.test(email) ? (
                <p style={{ color: 'green' }} className='input-name'>Email is valid!</p>
              ) : (
                <p style={{ color: 'red' }} className='input-name'>Email is not valid.</p>
              )}
                {errors.email&&<p className="text-danger input-name">{errors.email.message}</p>}
                <br/><br />
                <label className='input-name'>Password<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="password" className='inputs'
                 {
                  ...register1("password", {
                    required:"This field is required"
                  })
                }
                />
                {errors.password&&<p className="text-danger input-name">{errors.password.message}</p>}
                <br/><br />
                <label className='input-name'>Mobile Number<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs' maxLength={10}
                 {
                  ...register1("mobileNumber", {
                    required:"This field is required"
                  })
                }
                />
                {errors.mobileNumber&&<p className="text-danger input-name">{errors.mobileNumber.message}</p>}
                <br/><br />
                <label className='input-name'>Department<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="department" className='inputs'
                 {
                  ...register1("department", {
                    required:"This field is required"
                  })
                }
                />
                {errors.department&&<p className="text-danger input-name">{errors.department.message}</p>}
                <br/><br />
                <label className='input-name'>Photo<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="file" className='inputfile'
                 onChange={handleImage}
                
                />
                <div style={{ color: 'white', fontSize:'small'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filetype: Image/jpeg</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type='submit' className=' inputs  mb-3 back-color text-white  '>Register</button>
            </form>
        </div>
      
        </div>
    </div>
  )
} 

export default RegisterStudent