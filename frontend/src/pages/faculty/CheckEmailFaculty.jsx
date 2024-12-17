import React, { useState } from 'react'
import AxiosAPI from '../AxiosAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckEmailFaculty = () => {
    const {email}=useParams()
    const [verificationCode, setVerificationCode]=useState();
    const navigateTo=useNavigate();
const handleVerification=async()=>{
    try {
        await AxiosAPI.post(`/user/verify/${email}`, {"otp": verificationCode}).then((respond)=>{
            console.log(respond);
            toast("Verified")
        })
    } catch (error) {
        toast("Not verified")
    }
    //navigateTo(`/`)
}
  return (
    <div>
          <div className='back-color'>
        <div className="register">
        {/* <i class="fa-solid fa-chevron-left text-white ms-3 " ></i> */}
            <h3 className='register-title'> Check your Email !!!</h3>
            <form action="" className='forms'>
                <p className='text-wrap text-white-50 input-name '>Please enter 6-digit verification code sent to your email this validation is valid for 10 minutes</p>
                <label className='input-name'>Verification Code </label><br/> 
                <input type="number" className='inputs' onChange={(e)=>setVerificationCode(e.target.value)} /><br/><br />
                
                
                <button type='button' className=' inputs  mb-3 back-color text-white  ' onClick={async()=>{
 try {
    await AxiosAPI.post(`/faculty/verify/${email}`, {"otp": verificationCode}).then((respond)=>{
        console.log(respond);
        toast(respond.data.message)
        navigateTo("/")
    })
} catch (error) {
    toast("Not verified")
}
                }}>Verify Code</button>


            </form>
        </div>
      
        </div>
    </div>
  )
}

export default CheckEmailFaculty