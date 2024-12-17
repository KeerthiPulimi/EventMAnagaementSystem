import React, { useState } from 'react'
// import './Register.css'
import "../../css/style.css"
import { useForm } from 'react-hook-form'
import AxiosAPI from '../AxiosAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CgAsterisk } from "react-icons/cg";
const RegisterFaculty = () => {
  const {handleSubmit:handleSubmit2, register:register2, formState:formState2}=useForm();
  const {errors}=formState2;
  const [image, setImage]=useState();
  const [isLoading, setIsLoading]=useState(false);
  const navigateTo=useNavigate();

  const handleImage=(e)=>setImage(e.target.files[0])
  const handleRegisterFaculty=async(data)=>{
    setIsLoading(true);
    const myData=new FormData();
    for(let [key, value] of Object.entries(data)){
      myData.append(key, value);
    }
myData.append("Avathar", image);
try {
  await AxiosAPI.post("faculty/registerfaculty", myData).then((response)=>{
    console.log(response, " facs respo");
    toast("Registration Successful ...!")
    setIsLoading(false);
   navigateTo(`/checkmailFac/${response.data.newUser._id}`)
  })
} catch (error) {
  console.log(error, "errors");
  toast.error(error.response.data.message)
 // toast.success("Registered...! please verify!")
 // navigateTo(`/checkmailFac/${data.email}`);
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
        {/* <i class="fa-solid fa-chevron-left text-white ms-3 " ></i> */}
        {isLoading?<i className="fa-solid fa-spinner fa-spin text-white fs-3 spinners"></i>:""}

            <h3 className='register-title'> Registration Form</h3>
            <form  className='forms' onSubmit={handleSubmit2(handleRegisterFaculty)} encType='multipart/file' >
                <label className='input-name'>Name<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs'   {
                  ...register2("name", {
                    required:"This field is required"
                  })
                }
                />
                {errors.name&&<p className="text-danger input-name">{errors.name.message}</p>}
<br/><br />
                <label className='input-name'>Email<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="email" className='inputs'  {
                  ...register2("email", {
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
                {errors.email&&<p className="text-danger input-name">{errors.email.message}</p>}<br/><br />
                <label className='input-name'>Password<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="password" className='inputs'  {
                  ...register2("password", {
                    required:"This field is required"
                  })
                }
                />
                {errors.password&&<p className="text-danger input-name">{errors.password.message}</p>}<br/><br />
                <label className='input-name'>Mobile Number<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="number" className='inputs' maxLength={10} {
                  ...register2("mobileNumber", {
                    required:"This field is required"
                  })
                }
                />
                {errors.mobileNumber&&<p className="text-danger input-name">{errors.mobileNumber.message}</p>}<br/><br />
                
                <label className='input-name'>Department<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs'  {
                  ...register2("department", {
                    required:"This field is required"
                  })
                }
                />
                {errors.department&&<p className="text-danger input-name">{errors.department.message}</p>}<br/><br />
                <label className='input-name'>Photo<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="file" className='inputfile' 
                onChange={handleImage}
                />
              <div style={{ color: 'white', fontSize:'small'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filetype: Image/jpeg</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type='submit' className=' inputs  mb-3 back-color text-white'>Register</button>
            </form>
        </div>
      
        </div>
    </div>
  )
} 

export default RegisterFaculty