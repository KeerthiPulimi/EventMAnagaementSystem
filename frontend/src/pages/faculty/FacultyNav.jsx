import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosAPI, { url } from "../AxiosAPI";

const FacultyNav = () => {
  const faculty = JSON.parse(localStorage.getItem("faculty"));
  if (!faculty) {
    alert("Login First");
  }
  const [showSearch, setShowsearch]=useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState();
  const navigateTo = useNavigate();
  const searchFunction = async (e) => {
    try {
      await AxiosAPI.get(`admin/allevents/?title=${searchTerm}`).then(
        (respo) => {
          console.log(respo.data.events, "search");
          setSearchResults(respo.data.events);
          setShowsearch(true)
        }
      );
    } catch (error) {
      console.error(error, "search err");
    }
  };
  const filterFunction = async (data) => {
    try {
      await AxiosAPI.get(`admin/filter/?`).then((response) => {
        setSearchResults(response.data);
      });
    } catch (error) {
      console.log(error, "filter err");
    }
  };

  const [filters, setFilters] = useState({
    year: [],
    department: [],
    clubs:[],
    amount:[],
    others:[],
   
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [filters]);

  const fetchData = async () => {
    try {
      const response = await AxiosAPI.get("/admin/filter", {
        params: filters,
      });
      console.log(response.data.events, "filter");
      setSearchResults(response.data.events);
      
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = { ...filters };
    if (updatedFilters[filterType].includes(value)) {
      updatedFilters[filterType] = updatedFilters[filterType].filter(
        (item) => item !== value
      );
    } else {
      updatedFilters[filterType] = [...updatedFilters[filterType], value];
    }
    setFilters(updatedFilters);
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-xxl fixed-top "
        style={{ backgroundColor: "#020529", padding: "20px" }}
      >
        <button
          className="btn "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="fa-solid fa-bars text-white "></i>
        </button>

        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col">
              <form className="form">
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Search..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="left-pan">
                  <button
                    className="fa fa-search btn"
                    onClick={searchFunction}
                    type="button"
                  />
                </span>
              </form>
            </div>
          </div>
        </div>
        <li className=" dropdown">
          <i
            className="fa-solid fa-filter text-white me-5 nav-link "
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            style={{ fontSize: "30px" }}
            onClick={()=>setShowsearch(true)}
          ></i>
        </li>
      </nav>

      <div
        className="offcanvas offcanvas-start text-white"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div
          className="offcanvas-header"
          style={{ backgroundColor: "#020529" }}
        >
          <h4 className="offcanvas-title  " id="offcanvasWithBothOptionsLabel">
            <img src="/user.png" alt="" className="bg-white rounded-circle " />{" "}
            Faculty
          </h4>
          <button
            type="button"
            className="btn-close btn-close-white "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body" style={{ backgroundColor: "#020529" }}>
          <div className="container ">
            {/* <button className="navbar-toggler bg-white ms-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
            <div className="" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item  ">
                  <Link
                    to="/faculty"
                    className="nav-link "
                    style={{ fontSize: "20px" }}
                  >
                    {" "}
                    <span className="material-symbols-outlined">home</span>Home
                  </Link>
                </li>
                <li className="nav-item  mt-1 dropdown">
                  <Link
                    
                    className="nav-link dropdown-toggle "
                    style={{ fontSize: "20px" }}
                    data-bs-toggle="dropdown"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="material-symbols-outlined">
                      event_upcoming
                    </span>
                    Manage Events</Link> 
                    <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/addevent">
                        Add
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/viewEventFaculty">
                        View
                      </Link>
                    </li>
                   
                    
                  </ul>
                  
                 
                </li>
                <li className="nav-item  mt-1">
                  <Link
                    to="/allUsersFaculty"
                    className="nav-link "
                    style={{ fontSize: "20px" }}
                  >
                    <i className="fa-solid fa-users"></i>
                    Registered Users
                  </Link>
                </li>
                {/* <li className="nav-item  mt-1">
                  <Link to="/Logins" className="nav-link ">
                    View Faculty
                  </Link>
                </li> */}
                <li className="nav-item  mt-1">
                  <Link
                    to="/historyFaculty"
                    className="nav-link"
                    style={{ fontSize: "20px" }}
                  >
                    <i className="fa-regular fa-clock"></i>
                    History
                  </Link>
                </li>
                <li className="nav-item  mt-1">
                  <Link
                    to="/feedbackFaculty"
                    className="nav-link"
                    style={{ fontSize: "20px" }}
                  >
                    <i class="fa-regular fa-comments"></i>
                    Feedbacks
                  </Link>
                </li>
                <li className="nav-item  mt-1">
                  <Link
                    to="/queriesFac"
                    className="nav-link"
                    style={{ fontSize: "20px" }}
                  >
                    <span className="material-symbols-outlined">help</span>{" "}
                   Raise Query
                  </Link>
                </li>
              </ul>
              <hr className="text-white fs-2 " />
              <Link className=" btn btn-secondary " to="/" onClick={()=>{
                localStorage.removeItem("faculty");
                
              }}>Sign Out</Link>
            </div>
            <div
              className="d-flex justify-content-end "
              style={{ marginTop: "10rem" }}
            >
              {/* Profile link aligned to the bottom right */}
              <div className="text-white">
                {/* <span className="material-symbols-outlined">account_circle</span>{" "} */}
                {/* <Link to="#">Profile</Link> */}
                <img
                 src={`${url}/faculty/${faculty.Avathar}`}
                  alt=""
                  className=" rounded-circle "
                  style={{ height: "100px", width: "100px" }}
                  onClick={()=>navigateTo(`/facultyProfile`)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-primary" type="button" >Toggle right offcanvas</button> */}
      
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        data-bs-scroll="true"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ maxHeight: "100vh", overflowY: "auto" }}
      >
        <form >
        <div className="offcanvas-header back-color text-white ">
          <h5 className="offcanvas-title " id="offcanvasRightLabel">
            Filters
          </h5>
          <hr className="text-white" />
          <button className="btn btn-outline-danger " type="reset">CLEAR ALL</button>
          <button
            type="button"
            className="btn-close-white "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body back-color text-white ">
          <div className="cart">
            <h2>YEAR</h2>
            <input
              type="radio"
              className="input"
              name="year"
              value="First Year"
              onChange={() => handleCheckboxChange("year", "First Year")}
            />
            <label className="years">&nbsp;1st year</label> <br />
            <input
              type="radio"
              className="input"
              name="year"
              value="Second Year"
              onChange={() => handleCheckboxChange("year", "Second Year")}
            />
            <label className="years">&nbsp;2nd year</label> <br />
            <input
              type="radio"
              className="input"
              name="year"
              value="Third Year"
              onChange={() => handleCheckboxChange("year", "Third Year")}
            />
            <label className="years">&nbsp;3rd year</label> <br />
            <input
              type="radio"
              className="input"
              name="year"
              value="Fourth Year"
              onChange={() => handleCheckboxChange("year", "Fourth Year")}
            />
            <label className="years">&nbsp;4rth year</label> <br />
          </div>
          <div className="cart">
            <h2>DEPARTMENT</h2>
            <input
              type="radio"
              className="input"
              name="department"
              value="IT"
              onChange={() => handleCheckboxChange("department", "IT")}
            />
            <label className="years">&nbsp;IT</label> <br />
            <input
              type="radio"
              className="input"
              name="department"
              value="CSE"
              onChange={() => handleCheckboxChange("department", "CSE")}
            />
            <label className="years">&nbsp;CSE</label> <br />
            <input
              type="radio"
              className="input"
              name="department"
              value="MECH"
              onChange={() => handleCheckboxChange("department", "MECH")}
            />
            <label className="years">&nbsp;MECH</label> <br />
            <input
              type="radio"
              className="input"
              name="department"
              value="CIVIL"
              onChange={() => handleCheckboxChange("department", "CIVIL")}
            />
            <label className="years">&nbsp;CIVIL</label> <br />
            <input
              type="radio"
              className="input"
              name="department"
              value="ECE"
              onChange={() => handleCheckboxChange("department", "ECE")}
            />
            <label className="years">&nbsp;ECE</label> <br />
            <input
              type="radio"
              className="input"
              name="department"
              value="CSE"
              onChange={() => handleCheckboxChange("department", "CSE")}
            />
            <label className="years">&nbsp;CSE</label> <br />
          </div>
          <div className="cart">
            <h2>RUPEES</h2>
            <input
              type="radio"
              className="input"
              name="amount"
              value={0}
              onChange={() => handleCheckboxChange("amount", 0)}
            />
            <label className="years">&nbsp;Free</label> <br />
            <input
              type="radio"
              className="input"
              name="amount"
              value="0-50"
              onChange={() => handleCheckboxChange("amount", "0-50")}
            />
            <label className="years">&nbsp;0-50</label> <br />
            <input
              type="radio"
              className="input"
              name="amount"
              value="50-250"
              onChange={() => handleCheckboxChange("amount", "50-250")}
            />
            <label className="years">&nbsp;50-250</label> <br />
            <input
              type="radio"
              className="input"
              name="amount"
              value="250-500"
              onChange={() => handleCheckboxChange("amount", "250-500")}
            />
            <label className="years">&nbsp;250-500</label> <br />
            <input
              type="radio"
              className="input"
              name="amount"
              value="500-1000"
              onChange={() => handleCheckboxChange("amount", "500-1000")}
            />
            <label className="years">&nbsp;Above 500</label> <br />
          </div>
          <div className="cart">
            <h2>CLUBS</h2> 
            <input type="radio" className="input" name="clubs" value="Chess Club"
              onChange={() => handleCheckboxChange("clubs", "Chess Club")} />
            <label className="years">&nbsp;Chess Club</label> <br />
            <input
              type="radio"
              className="input"
              name="clubs"
              value="Music Club"
              onChange={() => handleCheckboxChange("clubs", "Music Club")}
            />
            <label className="years">&nbsp;Music Club</label> <br />
            <input
              type="radio"
              className="input"
              name="clubs"
              value="Sport Club"
              onChange={() => handleCheckboxChange("clubs", "Sport Club")}
            />
            <label className="years">&nbsp;Sport Club</label> <br />
            <input
              type="radio"
              className="input"
              name="clubs"
              value="Dance Club"
              onChange={() => handleCheckboxChange("clubs", "Dance Club")}
            />
            <label className="years">&nbsp;Dance Club</label> <br />
          </div>

          <div className="cart">     
            <h2>OTHERS</h2>
            <input
              type="radio"
              className="input"
              name="others"
              value="Internship"
              onChange={() => handleCheckboxChange("others", "Internship")}
            />
            <label className="years">&nbsp;INTERNSHIP</label> <br />
            <input
              type="radio" 
              className="input"
              name="others"
              value="Sports"
              onChange={() => handleCheckboxChange("others", "Sports")}
            />
            <label className="years">&nbsp;SPORTS</label> <br />
            <input
              type="radio"
              className="input"
              name="others"
              value="Workshop"
              onChange={() => handleCheckboxChange("others", "Workshop")}
            />
            <label className="years">&nbsp;WORKSHOPS</label> <br />
            <input
              type="radio"
              className="input"
              name="others"
              value="Hackathon"
              onChange={() => handleCheckboxChange("others", "Hackathon")}
            />
            <label className="years">&nbsp;Hackathon</label> <br />
            <input
              type="radio"
              className="input"
              name="others"
              value="Webinar"
              onChange={() => handleCheckboxChange("others", "Webinar")}
            />
            <label className="years">&nbsp;Webinar</label> <br />
          </div>
        </div></form>
      </div>
      {/* <nav className="navbar navbar-expand-lg">
      <div className="container ">
        <Link to="/" className="navbar-brand text-white ">Occasion Crafters</Link>
        <button className="navbar-toggler bg-white ms-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-auto" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link">View Students</Link>
            </li>
            <li className="nav-item">
              <Link to="/Adminlogin" className="nav-link">View Events</Link>
            </li>
            <li className="nav-item">
              <Link to="/Logins" className="nav-link">View Faculty</Link>
            </li>
            <li className="nav-item">
              <Link to="/Logins" className="nav-link">View Querys</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <style jsx="true">
       {` .navbar {
    background-color: #2b2c2c;
    overflow: hidden;
  }

  .nav-link {
    float: right;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .nav-link:hover {
    background-color: #dddddd;
    color: black;
  }

  .navbar-right {
    float: right;
  }`}
    </style> */}
      {searchResults&&showSearch && (
        <div className="margin-top">
          <div className="container">
            <h3 className="text-white">Search Results</h3>
            <div className="row">
              {searchResults &&
                searchResults.map((item) => (
                  <div className="col-4 mt-2" key={item._id}>
                    <div className="card">
                      <div className="card-body" key={item._id}>
                        <img
                          src={`${url}/events/${item.pic}`}
                          alt=""
                          width={100}
                          height={100}
                          className="w-100"
                          onClick={() =>
                            navigateTo(`/eventDetails/${item._id}`)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyNav;
