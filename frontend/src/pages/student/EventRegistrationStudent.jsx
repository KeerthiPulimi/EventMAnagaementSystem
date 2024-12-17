import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react';
import upiqr from "upiqr";
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AxiosAPI from '../AxiosAPI';
import { toast } from 'react-toastify';
import { CgAsterisk } from "react-icons/cg";
const EventRegistrationStudent = () => {
  const user=JSON.parse(localStorage.getItem("user"))
  const {eventID, amount}=useParams();
  const navigateTo=useNavigate()
  const {register:eventRegister, handleSubmit:eventSubmit}=useForm();
  const [htmlContent, setHtmlContent] = useState('');
const eventReg=async(data)=>{
try {
  await AxiosAPI.post(`user/event/${user._id}/${eventID}`, data).then((response)=>{
    toast.success("Registered for the event")
    
    console.log(response ,"event reg");
    navigateTo('/student')
  })
} catch (error) {
  toast.error(error.response.data.message);
  console.log(error.response.data.message);
}
}

  upiqr({
    payeeVPA: "7675928281@axl",
    payeeName: "thanusha", 
    amount:amount
  })
  .then((upi) => {
    setHtmlContent(upi.qr)  // data:image/png;base64,eR0lGODP...
   // console.log(upi.intent);
    //console.log(upi.qr);      // upi://pay?pa=bhar4t@upi&pn=Bharat..
  })
  .catch(err => {
    console.log(err);
  });
  

  return (
    <div>
           <div className='back-color'>
        <div className="register bg-secondary">
        {/* <i class="fa-solid fa-chevron-left text-white ms-3 " ></i> */}
            <h3 className='register-title'>Event Registration </h3>
            <form action="" className='forms' onSubmit={eventSubmit(eventReg)}>
                <label className='input-name'>Name<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs' {...eventRegister("name")} /><br/><br />
                <label className='input-name'>Roll No<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs'  {...eventRegister("roll_number")} /><br/><br />
                <label className='input-name'>College Name<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs'  {...eventRegister("collegename")} /><br/><br />
                <label className='input-name'>Dept Name<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs'  {...eventRegister("department")} /><br/><br />
                <label className='input-name'>Section<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs'  {...eventRegister("section")} /><br/><br />
                <label className='input-name'>Mobile Number<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs'  {...eventRegister("mobileNumber")} /><br/><br />
                <label className='input-name'>Email<CgAsterisk color='red' size='12px' /></label><br/>
                <input type="text" className='inputs'  {...eventRegister("email")}/><br/><br />
                <label className='input-name'>Payment</label>
               
              <img src={`${htmlContent}`} alt="" className='' />
              <input type="text" className='inputs'placeholder='Amount' value={amount}  readOnly  />
                <button type='submit' className=' inputs  mb-3 back-color text-white mt-1 '>Register</button>
            </form>
        </div>
      
        </div>
    </div>
  )
}

export default EventRegistrationStudent