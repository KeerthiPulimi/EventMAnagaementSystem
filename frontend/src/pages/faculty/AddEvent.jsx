import React, { useState } from 'react'
import FacultyNav from './FacultyNav'
import { useForm } from 'react-hook-form'
import AxiosAPI from '../AxiosAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CgAsterisk } from "react-icons/cg";
const AddEvent = () => {
    const {register:register5, handleSubmit:handleSubmit5, formState}=useForm();
    const navigateTo=useNavigate();
    const [image, setImage]=useState();
    const handleImage=(e)=>setImage(e.target.files[0]);
  const faculty= JSON.parse(localStorage.getItem("faculty"));
  const [others, setOthers]=useState()
const handleOthers=(e)=>{
    setOthers("others")
}
    const registerEvent=async(data)=>{
        const eventData=new FormData();
        for(let [key, value] of Object.entries(data)){
            eventData.append(key, value);
        }
        eventData.append("pic", image);
        try {
            await AxiosAPI.post(`/faculty/event/${faculty._id}`, eventData).then((responds)=>{
console.log(responds, "event ");
toast.success("Event Added Successfully ");
navigateTo("/faculty")
            })
        } catch (error) {
            console.error(error.response.data.message, "event error");
            toast.error(error.response.data.message)
        }
console.log(data);
    }
  return (
    <div>
        <FacultyNav/>
         <div class="back-color margin-top">
        
        <form id="eventForm" className='register-event mt-3 ' onSubmit={handleSubmit5(registerEvent)} encType='multipart/file'><h1 className='text-white'>Add Event</h1>
            <div className="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>Event Title:<CgAsterisk color='red' size='12px' /></label>
                <input type="text" id="title" name="title" required className='input-event'
                {
                    ...register5("title")
                }
                />
            </div>
            <div className="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>Description:<CgAsterisk color='red' size='12px' /></label>
                <textarea type="text" id="title" name="title" required className='input-event'
                {
                    ...register5("description")
                }
                />
            </div>
            <div className='form-group'>
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>From Date:<CgAsterisk color='red' size='12px' /></label>
                <input type="date" id="from_date" name="from_date" required  className='input-event'  {
                    ...register5("from_date")
                }/>
            </div>
            <div class="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label   className='input-name'>To Date:<CgAsterisk color='red' size='12px' /></label>
                <input type="date" id="to_date" name="to_date" required className='input-event'  {
                    ...register5("to_date")
                } />
            </div>
            <div class="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label   className='input-name'>Start Time:<CgAsterisk color='red' size='12px' /></label>
                <input type="time" id="start_time" name="start_time" required className='input-event'   {
                    ...register5("start_time")
                }/>
            </div>
            <div class="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label   className='input-name'>End Time:<CgAsterisk color='red' size='12px' /></label>
                <input type="time" id="end_time" name="end_time" required className='input-event'   {
                    ...register5("end_time")
                }/>
            </div>
            <div class="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>Participants:<CgAsterisk color='red' size='12px' /></label>
                <input type="text" id="participants" name="participants" required  className='input-event'  {
                    ...register5("participants")
                }/>
            </div>
            <div class="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>Strength:<CgAsterisk color='red' size='12px' /></label>
                <input type="number" id="strength" name="strength" required  className='input-event'  {
                    ...register5("strength")
                }/>
            </div>
            <div className="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>Amount:<CgAsterisk color='red' size='12px' /></label>
                <input type="number" id="amount" name="amount" required className='input-event'
                 {
                    ...register5("amount")
                } />
            </div>
            <div className="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>Location:<CgAsterisk color='red' size='12px' /></label>
                <input type="text" id="amount" name="amount" required className='input-event'
                 {
                    ...register5("location")
                } />
            </div>
            <div class="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>Department:<CgAsterisk color='red' size='12px' /></label>
                <select id="department" name="department" required className='input-event'  
                {
                    ...register5("department")
                }>
                    <option value="IT">EEE</option>
                    <option value="CSE">CSE</option>
                    <option value="MECH">MECH</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="ECE">ECE</option>
                    <option value="AI/ML">AI&ML</option>
                </select>
            </div>
            <div class="form-group">
            &nbsp;<label  className='input-name'>Organized by:<CgAsterisk color='red' size='12px' /></label>
                <select id="department" name="department" required className='input-event'  
                {
                    ...register5("organized")
                }>
                    <option value="EEE">EEE</option>
                    <option value="CSE">CSE</option>
                    <option value="MECH">MECH</option>
                    <option value="CIVIL">CIVIL</option>
                  
                    <option value="ECE">ECE</option>  
                    <option value="AI/ML">AI&ML</option>
                 
                </select>
            </div>
            <div className="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>Clubs:<CgAsterisk color='red' size='12px' /></label>
                <select id="clubs" name="clubs" required className='input-event'  
                {
                    ...register5("clubs")
                   
                }
                onchange={handleOthers}>
                    <option value="Chess Club">Chess Club</option>
                    <option value="Music Club">Music Club</option>
                    <option value="Sport Club">Sport Club</option>
                    <option value="Dance Club">Dance Club</option>
                    <option value="others">others</option>
                </select>
            </div>
          {others&&  <div className="form-group">
                <label  className='input-name'>Others:</label>
                <input  required className='input-event'  {
                    ...register5("e")
                }/>
             
            </div>}
            <div className="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>Technical:<CgAsterisk color='red' size='12px' /></label>
                <select  required className='input-event'  {
                    ...register5("others")
                }>
                    <option value="Internship">Internship</option> 
                   
                    <option value="Workshop">Workshop</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Webinar">Webinar</option>
                </select>
            </div>
            <div className="form-group">
            &nbsp;&nbsp;&nbsp;&nbsp;<label  className='input-name'>Year:<CgAsterisk color='red' size='12px' /></label>
                <select id="year" name="year" required className='input-event'  {
                    ...register5("year")
                }>
                    <option value="First Year">First Year</option>
                    <option value="Second Year">Second Year</option>
                    <option value="Third Year">Third Year</option>
                    <option value="Fourth Year">Fourth Year</option>
                </select>
            </div>
            
            <div class="form-group">
            &nbsp;&nbsp;<label  className='input-name'>Add Posters:<CgAsterisk color='red' size='12px' /></label>
                <input type="file" id="images" name="images" accept="image/*" className='input-event' onChange={handleImage} />
            </div>
            <button type="submit" className='event-btn'>Create Event</button>
        </form>
    </div>
    </div>
  )
}

export default AddEvent