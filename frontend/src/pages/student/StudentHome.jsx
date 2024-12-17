import React from 'react'
import StudentNav from './StudentNav'
import Banners from './Banners'
import UpcomingEvents from './UpcomingEvents'
import Footer from '../Footer'

const StudentHome = () => {
  return (
    <div className='bg-dark'>
        <StudentNav/>
       <div className='' style={{marginTop:"90px"}}>
       <Banners/>
       </div>
        <UpcomingEvents/>
        <Footer/>
    </div>
  )
}

export default StudentHome