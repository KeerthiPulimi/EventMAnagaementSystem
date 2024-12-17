import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentLogin from './student/StudentLogin';
import FacultyLogin from './faculty/FacultyLogin';
import AdminLogin from './admin/AdminLogin';

const SelectSignIn = () => {
  const [showLogin, setShowLlogin] = useState("home");
  const clickLogin = (elem) => {
    setShowLlogin(elem);
  };

  return (
    <div>
      {showLogin === "home" && (
        <div className="main">
          <div className="page">
            <Link to="/">
              <i class="fa-solid fa-angle-left back text-white"></i>
            </Link>&nbsp;
            <Link className="text-decoration-none text-white">Back</Link>
            {/* <button className='btn-close btn-close-white close-button '></button> */}
            <div className="boxes-container"> {/* Added container for horizontal layout */}
              <div className="box" onClick={() => clickLogin("student")}>
                <img src="/student.png" alt="" className="diagram" />
                <h3 className="titles">
                  <Link className="text-decoration-none text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student</Link>
                </h3>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="box" onClick={() => clickLogin("faculty")}>
                <img src="/teacher.png" alt="" className="diagram" />
                <h3 className="titles">
                  <Link className="text-decoration-none text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faculty</Link>
                </h3>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="box" onClick={() => clickLogin("admin")}>
                <img src="/admin.png" alt="" className="diagram" />
                <h3 className="titles">
                  <Link className="text-decoration-none text-white">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Admin
                  </Link>
                </h3>
              </div>
            </div> {/* Closing container for horizontal layout */}
            &nbsp;
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="center">
       <h3 className="singup">
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No account?&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/selectRegister" className="text-decoration-none text-white">
         Sign Up
        </Link>
       </h3>
      </div>
          </div>
        </div>
      )}
      {showLogin === "student" && <StudentLogin />}
      {showLogin === "faculty" && <FacultyLogin />}
      {showLogin === "admin" && <AdminLogin />}
    </div>
  );
};

export default SelectSignIn;
