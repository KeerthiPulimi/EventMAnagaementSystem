import React from 'react'
import "../../css/style.css"
import { Link, json, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosAPI from '../AxiosAPI'
import { toast } from 'react-toastify'
const AdminLogin = () => {
  const navigateTo=useNavigate()
  const {register:adminRegister, handleSubmit:adminSubmit}=useForm();
  const handleLogin=async(data)=>{
try {
  await AxiosAPI.post("/admin/login", data).then((response)=>{
console.log(response.data, "data");
const admin=JSON.stringify(response.data)
localStorage.setItem("admin", admin);
toast.success("Login Successful")
navigateTo("/admin");
  })
} catch (error) {
  console.log(error);
}
  }
  return (
    <div>
         <div className="back-color">
         <br></br>
          <br></br>
          <br></br>
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/"><i class="fa-solid fa-angle-left back text-white" ></i></Link><Link  className=' text-decoration-none text-white'>&nbsp;&nbsp;Back</Link>
{/* <button className='btn-close btn-close-white close-button '></button> */}
        <div className="register">
          {/* <i class="fa-solid fa-chevron-left text-white ms-3 " ></i> */}
          <h3 className="register-title"> Admin Log In</h3>
          <form  className="forms" onSubmit={adminSubmit(handleLogin)}>
            <label className="input-name">Username </label>
            <br />
            <input type="text" className="inputs" {...adminRegister("email")}/>
            <br />
            <br />
            <label className="input-name">Password</label>
            <br />
            <input type="password" className="inputs" {...adminRegister("password")} />
            <br />
            <br />
            <br />

            <button
              type="submit"
              className=" inputs  mb-3 back-color text-white  "
            >
              Login
            </button>
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin