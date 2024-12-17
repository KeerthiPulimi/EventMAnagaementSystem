import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AxiosAPI, { url } from '../AxiosAPI';
import { toast } from 'react-toastify';
import StudentNav from './StudentNav';

const ViewEventsRegistered = () => {
    const user= JSON.parse(localStorage.getItem("user"));
    const [eventsF ,setEventsF]=useState()
    const navigateTo=useNavigate();
    const [loading, setLoading]=useState(true)
   const getEventsByFaculty=async()=>{
  try {
      await AxiosAPI.get(`/user/registerevent/${user._id}`).then((response)=>{
          console.log(response, 'respo');
          setLoading(false)
  setEventsF(response.data.registerd)
      })
  } catch (error) {
     console.log(error); 
  }
    }
    useEffect(()=>{
      getEventsByFaculty()
  
    }, [])
    
   
    return (
      <div>
         <StudentNav/>
      <div className='back-color margin-top'>
          <h4 className='text-white'>Registered Events</h4>
          {loading&&<img src="/spinn.png" alt="" className='fa-spin ' width={100} />}
          <table className='table table-responsive table-dark'>
              <thead>
                  <tr>
                      <th>S.NO</th>
                      <th>TITLE</th>
                      <th>LOCATION</th>
                      <th>AVAILABLE SLOTS</th>
                      <th>DATE</th>
                      <th>DESCRIPTION</th>
                      <th>PARTICIPANTS</th>
                      <th>CLUB</th>
                      <th>POSTER</th>
                     
                      
                  </tr>
              </thead>
              <tbody>
                  {eventsF&&eventsF.map((item, index)=>(<tr key={item._id}>
                      <td>{index+1}</td>
                      <td>{item.title}</td>
                      <td>{item.location}</td>
                      <td>{item.strength}</td>
                      <td>{new Date(item.from_date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          // year: 'numeric',
        })} to {new Date(item.to_date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          // year: 'numeric',
        })}</td>
                      <td>{item.description}</td>
                      <td>{item.participants}</td>
                      <td>{item.clubs}</td>
                      <td> <img src={`${url}/events/${item.pic}`} alt="" className='' style={{width:"100px", height:"80px"}}  /></td>
                      {/* <td> </td> */}
                          {/* <button className='btn btn-light 'onClick={()=>navigateTo(`/updateevent/${item._id}`)} >Update</button>
                          <button className='btn btn-light mt-1  ' onClick={()=>deleteEvent(item._id)}>Delete</button>
                           */}
                          {/* <select name="" >
                              <option value="">Select</option>
                              <option value="">Update</option>
                              <option value="">Delete</option>
                          </select> */}
                     
                  </tr>))}
              </tbody>
          </table>
      </div>
      </div>
    )
  }

export default ViewEventsRegistered