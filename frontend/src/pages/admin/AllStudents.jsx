import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import AxiosAPI, { url } from "../AxiosAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllStudents = () => {
  const [faculty, setFaculty] = useState();
  const navigateTo=useNavigate()
  const getAllStudents = async () => {
    await AxiosAPI.get("/admin/students").then((response) => {
      console.log(response, "all students");
      setFaculty(response.data.users);
    });
  };
  useEffect(() => {
    getAllStudents();
  }, []);
  const deleteStudent=async(id)=>{
try {
    await AxiosAPI.delete(`/admin/student/${id}`).then((response) => {
        console.log(response, "all students");
        toast.success("student details deleted from database")
        getAllStudents()
      });
} catch (error) {
    console.error(error, "err");
}
  }
  return (
    <div>
      <AdminNav />
      <div className="back-color">
        <div className="container margin-top text-white">
          <h2>Students</h2>
          <table className="table table-bordered table-dark table-hover table-responsive ">
            <thead>
              <tr>
                <th>Student name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Image</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {faculty&&faculty.map((item)=>( <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobileNumber}</td>
                <td><img src={`${url}/students/${item.Avatar}`} alt="" style={{width:"60px"}} /></td>
                <td>
                  <button type="button" onClick={()=>navigateTo(`/updateStudent/${item._id}`)} >Update</button> <button onClick={()=>deleteStudent(item._id)}>Delete</button>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
