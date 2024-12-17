import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AxiosAPI, { url } from '../AxiosAPI'


const UpcomingEvents = () => {
    const navigateTo=useNavigate()
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
    const [eventsByCategory, setEventsByCategory] = useState({});

    useEffect(() => {
      // Fetch data from backend API
   
      AxiosAPI.get('/admin/events')
        .then(response => {
          // Organize data into categories
          const organizedData = organizeDataByCategory(response.data.futureEvents);
          setEventsByCategory(organizedData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    // Function to organize data by category
    const organizeDataByCategory = (data) => {
      const organizedData = {};
  
      // Group events by category
      data.forEach(event => {
        const category = event.others;
  
        if (!organizedData[category]) {
          organizedData[category] = [];
        }
  
        organizedData[category].push(event);
      });
  
      return organizedData;
    };
  
  return (
    <div className='bg-dark' style={{backgroundColor: "rgb(45, 45, 46)"}}>
       
        <div className="container  ">
        {eventsByCategory&&Object.keys(eventsByCategory).map(category => (
        <div key={category} className='row'>
          
          <h2 className='text-white'>{category}</h2>
               {eventsByCategory?eventsByCategory[category].map((item)=>( <div className="col-4 mt-2" key={item._id}>
                    <div className="card">
                        <div className="card-body" key={item._id}>
                       
                        <img src={`${url}/events/${item.pic}`} alt="" width={100} height={100} className='w-100' onClick={()=>navigateTo(`/eventDetails/${item._id}`)} />
                        </div>
                    </div>
                </div>)) : <div className=' alert alert-danger margin-top'>No new Upcoming events </div>}
                {/* <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                        <img src="/event4.jpg" alt="" width={100} height={100} className='w-100'  />

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                        <img src="/event4.jpg" alt="" width={100} height={100} className='w-100'  />

                        </div>
                    </div>
                </div> */}
                
            </div>))}
        </div>
        {/* <div className="container">
            <h3 className='text-white'>Hackathons</h3>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                        <img src="/event1.png" alt="" width={100} height={100} className='w-100'  />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                        <img src="/event1.png" alt="" width={100} height={100}  className='w-100'   />
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                        <img src="/event1.png" alt="" width={100} height={100} className='w-100'   />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <h3 className='text-white'>Dance Clubs</h3>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                        <img src="/event4.jpg" alt="" width={100} height={100} className='w-100'   />

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                        <img src="/event4.jpg" alt="" width={100} height={100} className='w-100'   />


                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                        <img src="/event4.jpg" alt="" width={100} height={100} className='w-100'   />


                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default UpcomingEvents