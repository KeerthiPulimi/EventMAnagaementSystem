import React, { useEffect, useState } from "react";
import AxiosAPI from "../AxiosAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
const ViewUsers = () => {
  const [allusers, setAllusers]=useState();
  const faculty=JSON.parse(localStorage.getItem("faculty"))
  const getAllUsers=async()=>{
    try {
        const res = await AxiosAPI.get(`/faculty/students/${faculty._id}`)
console.log(res,"jhgkjh")
    for (let i of res.data.student){
      const events = await AxiosAPI.get(`/faculty/event/${faculty._id}/${i.event}`)
      console.log(events,"lll")
      i.event = events.data.checkevent[0]
    }
    setAllusers(res.data.student)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllUsers()
  }, [])
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults]=useState()
    const navigateTo=useNavigate()
    const searchFunction = async (e) => {
      try {
        const respo=await AxiosAPI.get(`faculty/search/${faculty._id}/?username=${searchTerm}`)
            console.log(respo.data, "search");
            for (let i of respo.data.students){
              const events = await AxiosAPI.get(`/faculty/event/${faculty._id}/${i.event}`)
              console.log(events,"lll")
              i.event = events.data.checkevent[0]
            }
            setAllusers(respo.data.students);
          }
       
      catch (error) {
        console.error(error, "search err");
        toast.error(error.response.data.message)
      }
    };
    function formatDate(dateString) {
      const options = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      const formattedDate = new Date(dateString).toLocaleString("en-US", options);
      return formattedDate;
    }

    const convertKeysToUpperCase = (data) => {
      return data.map((item) => {
        const newItem = {};
        Object.keys(item).forEach((key) => {
          newItem[key.toUpperCase()] = item[key];
        });
        return newItem;
      });
    };
    const excludeColumns = ["_id", "faculty", "student", "__v", "event"];
  
    const handleDownloadExcel = () => {
      const filteredData = allusers.map((item) => {
        const filteredItem = { ...item };
        excludeColumns.forEach((column) => delete filteredItem[column]);
        return filteredItem;
      });
      const dataFordownloading = convertKeysToUpperCase(filteredData);
      const worksheet = XLSX.utils.json_to_sheet(dataFordownloading);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
      saveAs(blob, "users.xlsx");
    };
  return (
    <div>
    <div className="back-color">
      <h4 className="text-white">Manage Users</h4>
      <h5 className="text-white p-3">List Users</h5>
      <div className="container p-3 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col">
            <div className="form">
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="left-pan">
                <i className="fa fa-search btn " style={{position:"absolute", right:"150px", }} onClick={searchFunction} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>User Name</th>
            <th>College</th>
            <th>Department</th>
            <th>Section</th>

            <th>Roll No/Emp No</th>
            <th>Mobile Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {allusers&&allusers.map((item, index)=>(<tr key={item._id}>
            <td>{index+1}</td>
            <td>{item.event.title}</td>
            <td>{formatDate(item.event.from_date)} to {formatDate(item.event.to_date)}</td>
            <td>{item.name}</td>
            <td>{item.collegename}</td>
            <td>{item.department}</td>
            <td>{item.section}</td>
            <td>{item.roll_number}</td>
            <td>{item.mobileNumber}</td>
            <td>{item.email}</td>
          </tr>))}
          <tr><td colSpan={10} className="text-center"><button className="btn btn-outline-secondary" onClick={handleDownloadExcel}>Download</button></td></tr>
        </tbody>
      </table>
    </div></div>
  );
};

export default ViewUsers;
