import React from "react";
import { useForm } from "react-hook-form";
import AxiosAPI from "../AxiosAPI";
import StudentNav from "./StudentNav";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RaiseQuery = () => {
    const user =JSON.parse(localStorage.getItem("user"))
    const navigateTo=useNavigate()
  const {
    register: queryRegister,
    handleSubmit: handleQuerySubmit,
    formState,
  } = useForm();
  const submitQuery = async (data) => {
try {
    await AxiosAPI.post(`user/quires/${user._id}`, data).then((response)=>{
        console.log(response ,"query");
        toast.success("Your Query submitted....!")
        navigateTo("/student")
    })
} catch (error) {
    console.log(error);
}
  };
  return (
    <div className="back-color">
        <StudentNav/>
      <div className="container back-color text-white margin-top ">
       
        <h3 className="text-white">Raise Query</h3>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <form onSubmit={handleQuerySubmit(submitQuery)}>
                    <div className="col-12">
                      <label className="form-label">User Name</label>
                      <input type="text" className="form-control" {...queryRegister("username")}/>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Email</label>
                      <input type="text" className="form-control" {...queryRegister("email")} />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Query</label>
                      <textarea className=" form-control " rows={3} {...queryRegister("text")} />
                    </div>
                    <div className="col-12">
                      <button className="back-color text-white  btn btn-lg btn-outline-dark " type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseQuery;
