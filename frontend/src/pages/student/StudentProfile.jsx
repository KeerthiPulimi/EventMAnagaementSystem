import React, { useState } from "react";
import { url } from "../AxiosAPI";
import StudentNav from "./StudentNav";
import { useNavigate } from "react-router-dom";


const StudentProfile = () => {
  const [showChange, setShowChange]=useState(false);
  const navigateTo=useNavigate()
const user=JSON.parse(localStorage.getItem("user"))
  return (
    <div className="back-color">
      <StudentNav/>
     <div className="container  mb-4 p-3 d-flex justify-content-center margin-top ">
        <div className="card p-4" style={{width:"500px", backgroundColor:"#5e48f0"}}>
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img
              src={`${url}/students/${user.Avatar}`}
                height={100}
                width={100}
              />
            </button>
            <span className="name mt-3 text-white ">{user.name}</span>
            <span className="idd text-white ">{user.email}</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <span className="idd1 text-white ">{user.mobileNumber}</span>
              <span className="idd text-white ">{user.department}</span>
              <span>
               
              </span>
            </div>
            
            <div className=" d-flex mt-2">
              <button className="btn1 btn-dark" onClick={()=>navigateTo(`/updateProfile/${user._id}`)}>Update</button>
            </div>
            <div className="text mt-3">
              {/* <span>
                Eleanor Pena is a creator of minimalistic x bold graphics and
                digital artwork.
                <br />
                <br /> Artist/ Creative Director by Day #NFT minting@ with FND
                night.
              </span> */}
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
