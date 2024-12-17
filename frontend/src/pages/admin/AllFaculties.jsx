import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import AxiosAPI, { url } from '../AxiosAPI'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllFaculties = () => {
    const [faculty, setFaculty]=useState();
    const navigateTo=useNavigate()
    const getAllFaculties=async()=>{
await AxiosAPI.get("/admin/faculty").then((response)=>{
    console.log(response.data.facultys, "all facs");
    setFaculty(response.data.facultys)
})
    }
    useEffect(()=>{
getAllFaculties()
    }, [])
    const deleteStudent=async(id)=>{
        try {
            await AxiosAPI.delete(`/admin/faculty/${id}`).then((response) => {
                console.log(response, "all students");
                toast.success("faculty details deleted from database")
                getAllFaculties()
              });
        } catch (error) {
            console.error(error, "err");
        }
          }
  return (
    <div className='back-color'>
        <AdminNav/>
         <div className="container back-color margin-top text-white">
        <h2 >Faculties</h2>
        <table className="table table-bordered table-dark table-hover table-responsive ">
            <thead>
                <tr>
                    <th>Faculty name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Deaprtment</th>
                    {/* <th>Password</th> */}
                    <th>Photo</th>
                    {/* <th>View Details</th> */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
        
             { faculty&&faculty.map ((item)=> (<tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobileNumber}</td>
                    <td>{item.department}</td>
                    
                    <td><img src={`${url}/faculty/${item.Avathar}`} alt="" style={{width:"60px"}} /></td>
                    {/* <td><a href="/Profile">View  Details</a></td> */}
                    <td><button type="button" onClick={()=>navigateTo(`/updateFaculty/${item._id}`)} >Update</button> <button onClick={()=>deleteStudent(item._id)}>Delete</button></td>
                 
                    
                </tr>))}
                
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default AllFaculties