import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AxiosAPI from "../AxiosAPI";
import { toast } from "react-toastify";

const FacultyLogin = () => {
  const {
    register: register4,
    handleSubmit: handleSubmit4,
    formState: formState4,
  } = useForm();
  const { errors } = formState4;
  const navigateTo = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await AxiosAPI.post(`/faculty/login`, data).then(
        (response) =>{ console.log(response)
        const  faculty= JSON.stringify(response.data.checkfaculty)
          localStorage.setItem("faculty", faculty)
        toast("Sign in successfull");
        
        navigateTo("/faculty")
      }
      );
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  };

  return (
    <div>
      <div className="back-color">
      <br></br>
          <br></br>
          <br></br>
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/"><i class="fa-solid fa-angle-left back text-white" ></i></Link><Link  className=' text-decoration-none text-white'>&nbsp;&nbsp;Back</Link>
{/* <button className='btn-close btn-close-white close-button '></button> */}
        <div className="register">
          {/* <i class="fa-solid fa-chevron-left text-white ms-3 " ></i> */}
          <h3 className="register-title"> Faculty Log In</h3>
          <form
            action=""
            className="forms"
            onSubmit={handleSubmit4(handleSubmit)}
          >
            <label className="input-name">Username </label>
            <br />
            <input type="text" className="inputs" {...register4("email")} />
            <br />
            <br />
            <label className="input-name">Password</label>
            <br />
            <input type="password" className="inputs" {...register4("password")} />
            <br />
            <br />
            <br />

            <button
              type="submit"
              className=" inputs  mb-3 back-color text-white  "
            >
              Login
            </button>
            <h3 className="singup">
              No account? &nbsp;
              <span>
                <Link to="/RegisterFaculty" className="btn btn-outline-light ">
                  Sign up
                </Link>{" "}
              </span>
            </h3>
            <h3 className="singup"></h3>
            <Link className="singup btn" to="/forget">
              Forget Password?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FacultyLogin;
