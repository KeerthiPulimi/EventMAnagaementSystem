import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import AxiosAPI from '../AxiosAPI';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEventAdmin = () => {
    const{eventId}=useParams();
    const {register:register6, handleSubmit:handleSubmit6, formState, setValue:setValue1}=useForm();
    const navigateTo=useNavigate();
    const [image, setImage]=useState();
    const handleImage=(e)=>setImage(e.target.files[0]);
 const faculty= JSON.parse(localStorage.getItem("faculty"));

 const getEventsByFaculty=async()=>{
try {
    await AxiosAPI.get(`admin/events/${eventId}`).then((response)=>{
        console.log(response.data, 'respo');
        for(let [key,value]of Object.entries(response.data.events)){
            // console.log("Setting value for", key, ":", value);
            setValue1(key ,value)
        }

    })
} catch (error) {
   console.log(error); 
}
  }
  useEffect(()=>{
    getEventsByFaculty()

  }, [])

    const updatesEvent=async(data)=>{
        const eventData=new FormData();
        for(let [key, value] of Object.entries(data)){
            eventData.append(key, value);
        }
        eventData.append("pic", image);
        try {
            await AxiosAPI.put(`admin/updateevent/${eventId}`, eventData).then((responds)=>{
console.log(responds, "event ");
toast.success("Event updated Successfully ");
navigateTo("/admin")
            })
        } catch (error) {
            console.error(error, "event error");
            toast.error(error.response.data.message)
        }
console.log(data);
    }
  return (
    <div>

         <div class="back-color margin-top">
        
        <form id="eventForm" className='register-event mt-3 ' onSubmit={handleSubmit6(updatesEvent)} encType='multipart/file'><h1 className='text-white'>Update Event</h1>
            <div className="form-group">
                <label  className='input-name'>Event Title:</label>
                <input type="text" id="title" name="title" required className='input-event'
                {
                    ...register6("title")
                }
                />
            </div>
            <div className="form-group">
                <label  className='input-name'>Description:</label>
                <textarea type="text" id="title" name="title" required className='input-event'
                {
                    ...register6("description")
                }
                />
            </div>
            <div className='form-group'>
                <label  className='input-name'>From Date:</label>
                <input type="date" id="from_date" name="from_date" required  className='input-event'  {
                    ...register6("from_date")
                }/>
            </div>
            <div class="form-group">
                <label   className='input-name'>To Date:</label>
                <input type="date" id="to_date" name="to_date" required className='input-event'  {
                    ...register6("to_date")
                } />
            </div>
            <div class="form-group">
                <label   className='input-name'>Start Time:</label>
                <input type="time" id="start_time" name="start_time" required className='input-event'   {
                    ...register6("start_time")
                }/>
            </div>
            <div class="form-group">
                <label   className='input-name'>End Time:</label>
                <input type="time" id="end_time" name="end_time" required className='input-event'   {
                    ...register6("end_time")
                }/>
            </div>
            <div class="form-group">
                <label  className='input-name'>Participants:</label>
                <input type="text" id="participants" name="participants" required  className='input-event'  {
                    ...register6("participants")
                }/>
            </div>
            <div class="form-group">
                <label  className='input-name'>Strength:</label>
                <input type="number" id="strength" name="strength" required  className='input-event'  {
                    ...register6("strength")
                }/>
            </div>
            <div className="form-group">
                <label  className='input-name'>Amount:</label>
                <input type="number" id="amount" name="amount" required className='input-event'
                 {
                    ...register6("amount")
                } />
            </div>
            <div className="form-group">
                <label  className='input-name'>Location:</label>
                <input type="text" id="amount" name="amount" required className='input-event'
                 {
                    ...register6("location")
                } />
            </div>
            <div class="form-group">
                <label  className='input-name'>Department:</label>
                <select id="department" name="department" required className='input-event'  {
                    ...register6("department")
                }>
                    <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="MECH">MECH</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="ECE">ECE</option>
                 
                </select>
            </div>
            <div class="form-group">
                <label  className='input-name'>Organized By:</label>
                <select id="department" name="department" required className='input-event'  {
                    ...register6("organized")
                }>
                    <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="MECH">MECH</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="ECE">ECE</option>
                 
                </select>
            </div>
            <div className="form-group">
                <label  className='input-name'>Clubs:</label>
                <select id="clubs" name="clubs" required className='input-event'  {
                    ...register6("clubs")
                }>
                    <option value="Chess Club">Chess Club</option>
                    <option value="Music Club">Music Club</option>
                    <option value="Sport Club">Sport Club</option>
                    <option value="Dance Club">Dance Club</option>
                </select>
            </div>
            <div className="form-group">
                <label  className='input-name'>Year:</label>
                <select id="year" name="year" required className='input-event'  {
                    ...register6("year")
                }>
                    <option value="First Year">First Year</option>
                    <option value="Second Year">Second Year</option>
                    <option value="Third Year">Third Year</option>
                    <option value="Fourth Year">Fourth Year</option>
                </select>
            </div>
            <div className="form-group">
                <label  className='input-name'>Others:</label>
                <select  required className='input-event'  {
                    ...register6("others")
                }>
                    <option value="Internship">Internship</option>
                    <option value="Sports">Sports</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Webinar">Webinar</option>
                </select>
            </div>
            <div class="form-group">
                <label  className='input-name'>Add Posters:</label>
                <input type="file" id="images" name="images" accept="image/*" className='input-event' onChange={handleImage} />
            </div>
            <button type="submit" className='event-btn'>Update Event</button>
        </form>
    </div>
    </div>
  )
}

export default UpdateEventAdmin