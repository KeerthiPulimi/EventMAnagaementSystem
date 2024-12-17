import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import AxiosAPI from "../AxiosAPI";
import { toast } from "react-toastify";

const Ratings = () => {
  const {eventId}=useParams();
  const navigateTo=useNavigate()
  const user=JSON.parse(localStorage.getItem("user"));
  const{register:feedbackRegister, handleSubmit:handleFeedbckSubmit}=useForm()
 const submitFeedback=async(data)=>{
try {
  await AxiosAPI.post(`user/feedback/${user._id}/${eventId}`, data).then((response)=>{
console.log(response);
toast.success(response.data.message)
navigateTo("/student")
  })
} catch (error) {
  console.log(error);
  toast.error(error.response.data.message)
  navigateTo("/student")
}
 }
  return (
    <div>
      <div className="back-color">
        <div className="container back-color text-white margin-top ">
          {" "}
          <h3 className="text-white">Give Feedback</h3>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <form onSubmit={handleFeedbckSubmit(submitFeedback)}>
                      <div className="col-12">
                        <label className="form-label">User Name</label>
                        <input type="text" className="form-control" {...feedbackRegister("username")} />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control"  {...feedbackRegister("email")} />
                      </div>
                      <div className="col-12">
                        <label className="form-label">feedback</label>
                        <textarea className=" form-control " rows={3}  {...feedbackRegister("feedback")} />
                      </div>
                      <div className="col-12">
                        <button className="back-color text-white  btn btn-lg btn-outline-dark ">
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
    </div>
  );
};

export default Ratings;
