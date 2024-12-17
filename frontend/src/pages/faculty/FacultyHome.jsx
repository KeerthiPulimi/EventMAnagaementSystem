import React from 'react'
import Footer from '../Footer'
import FacultyNav from './FacultyNav';
import Banners from '../student/Banners';
import UpcomingEvents from '../student/UpcomingEvents';


const FacultyHome = () => {
  return (
    <div className='bg-dark'> 
        <FacultyNav/>
       <div className='' style={{marginTop:"90px"}}>
       <Banners/>
       </div>
        <UpcomingEvents/>
        <Footer/>
    </div>
  )
}

export default FacultyHome;