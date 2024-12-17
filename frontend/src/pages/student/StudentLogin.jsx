import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import AxiosAPI from '../AxiosAPI'
import { toast } from 'react-toastify'

const StudentLogin = () => {
  const {register:register3, handleSubmit:handleSubmit3, formState:formState3}=useForm();
  const {errors}=formState3;
  const navigateTo=useNavigate();
const handleLoginStudent=async(data)=>{
try {
  await AxiosAPI.post("/user/login", data).then((respo)=>{
    console.log(respo.data.userFound, "login");
    const user=JSON.stringify(respo.data.userFound );
    localStorage.setItem("user",user)
    toast.success("Login Successfull")
    navigateTo("/student");

  })
} catch (error) {
toast.error(error.response.data.message)
  console.log("Login error", error.response.data.message);
}
}
  return (
    <div>
        <div className='back-color'>
        <br></br>
          <br></br>
          <br></br>
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/"><i class="fa-solid fa-angle-left back text-white" ></i></Link><Link  className=' text-decoration-none text-white'>&nbsp;&nbsp;Back</Link>
{/* <button className='btn-close btn-close-white close-button '></button> */}
        <div className="register">
        {/* <i class="fa-solid fa-chevron-left text-white ms-3 " ></i> */}
            <h3 className='register-title'> Student Log In</h3>
            <form  className='forms' onSubmit={handleSubmit3(handleLoginStudent)}>
                
                <label className='input-name'>Username </label><br/> 
                <input type="text" className='inputs' 
                {...register3("email")}
                />
                  {errors.email&&<p className="text-danger input-name">{errors.email.message}</p>}
                <br/><br />
                <label className='input-name'>Password</label><br/>
                <input type="password" className='inputs'
                {...register3("password")}
                
                />
                  {errors.password&&<p className="text-danger input-name">{errors.password.message}</p>}
                <br/><br /><br/>
                
                <button type='submit' className=' inputs  mb-3 back-color text-white  '>Login</button>
<h3 className='singup'>No account? &nbsp;<span><Link to="/RegisterStudent" className='btn btn-outline-light '>Sign up</Link> </span></h3>
<h3 ></h3>
<Link className='singup btn' to="/forget">Forget Password?</Link>
            </form>
        </div>
      
        </div>
    </div>
  )
}

export default StudentLogin