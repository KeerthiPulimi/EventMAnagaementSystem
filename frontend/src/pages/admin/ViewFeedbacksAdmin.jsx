import React, { useEffect, useState } from 'react'

import AxiosAPI from '../AxiosAPI'
import AdminNav from './AdminNav'

const ViewFeedbacksAdmin = () => {
  const [queries, setQueries]=useState()
  const faculty= JSON.parse(localStorage.getItem("faculty"))

  const getQueries=async()=>{
    try {
      await AxiosAPI.get(`admin/feedbacks`).then((respone)=>{
        console.log(respone.data, "feed");
        setQueries(respone.data.feedbacks
          )
      })
    } catch (error) {
      console.log(error, "querries");
    }
  }
  useEffect(()=>{
    getQueries()
  }, []);
  function formatDate(dateString) {
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    const formattedDate = new Date(dateString).toLocaleString('en-US', options);
    return formattedDate;
  }
  return (
    <div>
      <AdminNav/>
         <div className="p-3 back-color text-white margin-top">
        <h4>Feedbacks</h4>
        <hr />
       
        <div className="card"> <h5 className="p-3">Inbox <small className=' badge bg-success'>{queries?.length}</small></h5>
            <div className="card-body">
                  <ul className="list-unstyled ">
          {queries&&queries.map((item)=>(<li className="p-3 " key={item._id}>
            <span className="rounded-circle bg-secondary">
            <i className="fa-regular fa-user text-white "></i>
            </span>
            <p style={{ display: "inline" }} className="p-3 fs-5 ">
             {item.username} <small className=" ms-lg-5 ">{formatDate(item.date)}</small>
            </p>
            <p className=" ms-lg-5 ">{item.feedback
}</p>
          </li>))}
          {/* <li className="p-3 ">
            <span className="rounded-circle bg-secondary">            <i className="fa-regular fa-user text-white "></i>
</span>
            <p style={{ display: "inline" }} className="p-3 fs-5">
              S. Khaja Khijar <small className=" ms-lg-5 ">03:59PM</small>
            </p>
            <p className=" ms-lg-5 ">can I change paymnet details</p>

          </li>
          <li className="p-3 ">
            <span className="rounded-circle bg-secondary">            <i className="fa-regular fa-user text-white "></i>
</span>
            <p style={{ display: "inline" }} className="p-3 fs-5">
              Event2 <small className=" ms-lg-5 text-muted">31 Dec 2024</small>
            </p>
            <p className=" ms-lg-5 ">I am unable to register</p>

          </li>
          <li className="p-3 ">
            <span className="rounded-circle bg-secondary">            <i className="fa-regular fa-user text-white "></i>
</span>
            <p style={{ display: "inline" }} className="p-3 fs-5">
              Event2 <small className=" ms-lg-5 ">31 Dec 2024</small>
            </p>
            <p className=" ms-lg-5 ">I am unable to register</p>

          </li> */}
        </ul>
            </div>
        </div>
      
    
      </div>
      <style jsx="true">{`
        .rounded-circle {
          width: 40px;
          height: 40px;
          display: inline-block;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}

export default ViewFeedbacksAdmin