import React, { useEffect, useState } from 'react'
import UpcomingEvents from './UpcomingEvents'
import { useNavigate, useParams } from 'react-router-dom'
import AxiosAPI, { url } from '../AxiosAPI';

const EventDetails = () => {
    const navigateTo=useNavigate();
    const {id}=useParams();
    const [events, setEvents]=useState()

    const getAllEvents=async()=>{
      try {
        await AxiosAPI.get(`/admin/events/${id}`).then((resp)=>{
          console.log(resp.data
            , " events by id");
            setEvents(resp.data.events)
        })
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{getAllEvents()}, [])
  return (
    <div>
       {events&& <div className="cont bg-dark text-white">
    <i class="fa-solid fa-angle-left back" style={{marginLeft: "150px"}} onClick={()=>window.history.back()}></i>&nbsp;&nbsp;Back
      <div className="icon">
       <img src={`${url}/events/${events.pic}`} alt="" style={{width:"700px", height:"300px", position:"relative", left:"300px"}} className=" justify-content-center " />
      </div>
      <div className="title">
        <h2 className='text-center'>{events.title}</h2>
      </div>
      <div className="sloats" style={{ display: "flex", alignItems: "center", marginLeft: "300px"  }}>
  <div className="registerd" >
    <i className="fa-regular fa-user"></i>
    <span style={{ marginRight: "10px" }} className='badge text-bg-secondary'>{events.registered}</span>
    <h2 className=''>Registered students</h2>
  </div>
  <div className="" style={{ marginLeft: "300px" }}>
  <i className="fa-solid fa-whiskey-glass"></i> <span style={{ marginRight: "10px", }} className='badge text-bg-secondary'>{events.strength}</span>
    <h2>Available slots</h2>
  </div>
</div>

      <div className="but">
        <button onClick={()=>navigateTo(`/registerEvent/${events._id}/${events.amount}`)} className='inputs w-75' style={{marginLeft: "150px"}}>Register</button>
      </div>
      <div className="para" style={{marginLeft: "150px", marginRight:"120px"}}>
       {events.description}
      </div>
      <div className="details p-3" style={{marginLeft: "150px"}}>
        <h5>Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :   <span> {new Date(events.from_date).toLocaleDateString('en-GB', {
        day  : 'numeric',
        month: 'short',
        year : 'numeric',
      })} to {new Date(events.to_date).toLocaleDateString('en-GB', {
        day  : 'numeric',
        month: 'short',
        year : 'numeric',
      })}</span></h5>
        <h5> Time        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  <span>{events.start_time} to {events.end_time}</span></h5>
        <h5>Location     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:     <span>{events.location}</span></h5>
        <h5>Participants &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :  <span>{events.participants}</span></h5>
        <h5>Department  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :    <span>{events.department}</span></h5>
        <h5>Organiserd by &nbsp;&nbsp; : {events.organized}</h5>
        <h5>Amount       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  : &#8377;{events.amount} </h5>
      </div>
        <h3 style={{marginLeft: "150px"}}>More Like This</h3>
        <div style={{marginLeft: "150px"}}>
<UpcomingEvents/>
        </div>
     
    </div>}
    </div>
  )
}

export default EventDetails