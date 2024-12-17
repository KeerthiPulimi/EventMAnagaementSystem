import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg">
      <div className="container ">
      <img src="/ksrmlogo.jpg" alt=""  className='logok'/>

        <Link to="/" className="navbar-brand text-white ">&nbsp;<big>KSRMCE OCCASION CRAFTERS</big></Link>
        <button className="navbar-toggler bg-white ms-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-auto" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/selectSignIn" className="nav-link">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/selectRegister" className="nav-link">Sign Up</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/Logins" className="nav-link">Students</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/ksrm1.jpg"className="d-block w-100  " style={{height:"100vh"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/ksrm.jpg" className="d-block w-100" alt="..." style={{height:"100vh"}} />
                    </div>
                    <div className="carousel-item">
                        <img src="/ksrm2.jpg"className="d-block w-100" alt="..." style={{height:"100vh"}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
          <Footer/>
    <style jsx="true">
       {` .navbar {
    background-color: #020529;
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
    </style>
    </div>
  )
}

export default Home