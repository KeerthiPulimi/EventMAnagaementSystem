import React, { useEffect, useState } from 'react'
import "../../css/style.css"
import {Carousel} from "react-bootstrap" 
import { useNavigate } from 'react-router-dom'
import AxiosAPI, { url } from '../AxiosAPI'
const Banners = () => {
  const navigateTo=useNavigate();
  const [events, setEvents]=useState()
  const getAllEvents=async()=>{
    try {
      await AxiosAPI.get("/admin/events").then((resp)=>{
        console.log(resp.data.futureEvents
          , "all events");
          setEvents(resp.data.futureEvents)
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{getAllEvents()}, [])

  return (
   <section className='awSlider'>
     <div className="carousel   ">
<div className="card" >
    <div className="card-body">
           <Carousel pause="hover">
     {
      events?events.map((item)=>( <Carousel.Item key={item._id} className='back-color' onClick={()=>navigateTo(`/eventDetails/${item._id}`)}>
        <img src={`${url}/events/${item.pic}`} alt="" className='' style={{width:"700px", height:"300px"}}  />
          <Carousel.Caption >
            <h3 className='back-color'>{item.title}</h3>
            <p className='back-color'>Date: {new Date(item.from_date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })} to {new Date(item.to_date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })} </p>
          </Carousel.Caption>
        </Carousel.Item>))
     : <div className=' alert alert-danger  margin-top'>No new Upcoming events </div>}
      {/* <Carousel.Item>
      <img src="/event2.png" alt="" style={{width:"700px", height:"300px"}} onClick={()=>navigateTo(`/eventDetails/title`)}  />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/event3.png" alt="" style={{width:"700px" , height:"300px"}}   />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </div>
</div>
      
      
    </div>
  
   </section>
  )
}

export default Banners