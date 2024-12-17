import React from 'react'
import AdminNav from './AdminNav'
import Footer from '../Footer'
import Banners from '../student/Banners'
import UpcomingEvents from '../student/UpcomingEvents'

const AdminHome = () => {
  return (
    <div className='bg-dark'>
        <AdminNav/>
        <div className='' style={{marginTop:"90px"}}>
       <Banners/>
       </div>
        <UpcomingEvents/>
        {/* <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/ksrm1.jpg"class="d-block w-100  " style={{height:"100vh"}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/ksrm.jpg" class="d-block w-100" alt="..." style={{height:"100vh"}} />
                    </div>
                    <div className="carousel-item">
                        <img src="/ksrm2.jpg"class="d-block w-100" alt="..." style={{height:"100vh"}}/>
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
            </div> */}
            <Footer/>
    </div>
  )
}

export default AdminHome