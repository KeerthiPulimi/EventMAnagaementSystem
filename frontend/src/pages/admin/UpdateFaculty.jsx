import React, { useEffect, useState } from 'react'
// import './Register.css'
import "../../css/style.css"
import { useForm } from 'react-hook-form'
import AxiosAPI from '../AxiosAPI';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
const UpdateFaculty = () => {
  const {facultyId}=useParams();
  const {handleSubmit:handleSubmit2, register:register2, formState:formState2, setValue}=useForm();
  const {errors}=formState2;
  const [image, setImage]=useState();
  const [isLoading, setIsLoading]=useState(false);
  const navigateTo=useNavigate();

  const handleImage=(e)=>setImage(e.target.files[0])
  const handleRegisterFaculty=async(data)=>{
    setIsLoading(true);
    const myData=new FormData();
    for(let [key, value] of Object.entries(data)){
      myData.append(key, value);
    }
myData.append("Avathar", image);
try {
  await AxiosAPI.put(`/admin/faculty/${facultyId}`, myData).then((response)=>{
    console.log(response, " facs respo");
    toast("Updated Successfuly...!")
    setIsLoading(false);
    navigateTo(`/admin`)
  })
} catch (error) {
  console.log(error, "errors");
  toast.error(error.response.data.message)
  
}
  }
  const getAllStudents = async () => {
    await AxiosAPI.get(`/admin/faculty/${facultyId}`).then((response) => {
      console.log(response, "all students");
      for(let [key, value] of Object.entries(response.data.facultys)){
       setValue(key, value);
      }
    });
  };
  useEffect(() => {
    getAllStudents();
  }, []);
  return (
    <div>
        <div className='back-color'>
        <div className="register">
        {/* <i class="fa-solid fa-chevron-left text-white ms-3 " ></i> */}
        {isLoading?<i className="fa-solid fa-spinner fa-spin text-white fs-3 spinners"></i>:""}

            <h3 className='register-title'> Update Form (faculty)</h3>
            <form  className='forms' onSubmit={handleSubmit2(handleRegisterFaculty)} encType='multipart/file' >
                <label className='input-name'>Name</label><br/>
                <input type="text" className='inputs'   {
                  ...register2("name", {
                    required:"This field is required"
                  })
                }
                />
                {errors.name&&<p className="text-danger input-name">{errors.name.message}</p>}
<br/><br />
                <label className='input-name'>Email</label><br/>
                <input type="email" className='inputs'  {
                  ...register2("email", {
                    required:"This field is required"
                  })
                }
                />
                {errors.email&&<p className="text-danger input-name">{errors.email.message}</p>}<br/><br />
                <label className='input-name'>Password</label><br/>
                <input type="password" className='inputs'  {
                  ...register2("password", {
                    required:"This field is required"
                  })
                }
                />
                {errors.password&&<p className="text-danger input-name">{errors.password.message}</p>}<br/><br />
                <label className='input-name'>Mobile Number</label><br/>
                <input type="number" className='inputs'  {
                  ...register2("mobileNumber", {
                    required:"This field is required"
                  })
                }
                />
                {errors.mobileNumber&&<p className="text-danger input-name">{errors.mobileNumber.message}</p>}<br/><br />
                <label className='input-name'>College</label><br/>
                <input type="text" className='inputs'  {
                  ...register2("college", {
                    required:"This field is required"
                  })
                }
                />
                {errors.college&&<p className="text-danger input-name">{errors.college.message}</p>}<br/><br />
                <label className='input-name'>Department</label><br/>
                <input type="text" className='inputs'  {
                  ...register2("department", {
                    required:"This field is required"
                  })
                }
                />
                {errors.department&&<p className="text-danger input-name">{errors.department.message}</p>}<br/><br />
                <label className='input-name'>Photo</label><br/>
                <input type="file" className='inputfile' 
                onChange={handleImage}
                />
              <br/><br />
                <button type='submit' className=' inputs  mb-3 back-color text-white'>Update</button>
            </form>
        </div>
      
        </div>
    </div>
  )
} 

export default UpdateFaculty