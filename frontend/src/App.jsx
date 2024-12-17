import { useState } from 'react'
import AdminNav from './pages/admin/AdminNav'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AdminHome from './pages/admin/AdminHome'
import Home from './pages/Home'
import AdminLogin from './pages/admin/AdminLogin'
import Login from './pages/Login'
import AllFaculties from './pages/admin/AllFaculties'

import StudentNav from './pages/student/StudentNav'
import StudentHome from './pages/student/StudentHome'
import SelectSignIn from './pages/SelectSignIn'
import RegisterStudent from './pages/admin/RegisterStudent'
import RegisterFaculty from './pages/faculty/RegisterFaculty'
import SelectRegister from './pages/SelectRegister'
import FacultyHome from './pages/faculty/FacultyHome'
import Forgotpassword from './pages/faculty/Forgotpassword'
import AddEvent from './pages/faculty/AddEvent'

import HistoryEventFaculty from './pages/faculty/HistoryEventFaculty'
import ViewEventFaculty from './pages/faculty/ViewEventFaculty'
import ViewUsers from './pages/faculty/ViewUsers'
import ViewQueriesFaculty from './pages/faculty/ViewQueriesFaculty'
import EventDetails from './pages/student/EventDetails'
import UpcomingEvents from './pages/student/UpcomingEvents'
import EventRegistrationStudent from './pages/student/EventRegistrationStudent'
import AllStudents from './pages/admin/AllStudents'
import AllEvents from './pages/admin/AllEvents'
import RaiseQuery from './pages/student/RaiseQuery'
import HistoryEventStudent from './pages/student/HistoryEventStudent'
import Ratings from './pages/student/Ratings'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CheckEmail from './pages/student/CheckEmail'
import CheckEmailFaculty from './pages/faculty/CheckEmailFaculty'
import UpdateEvent from './pages/faculty/UpdateEvent'
import ViewEventsRegistered from './pages/student/ViewEventsRegistered'
import UpdateStudent from './pages/admin/UpdateStudent'
import UpdateFaculty from './pages/admin/UpdateFaculty'
import StudentProfile from './pages/student/StudentProfile'
import UpdateEventAdmin from './pages/admin/UpdateEventAdmin'
import RaiseQueryFac from './pages/faculty/RaiseQueryFac'
import ViewFeedbacksFaculty from './pages/faculty/ViewFeedbacksFaculty'
import ViewFeedbacksAdmin from './pages/admin/ViewFeedbacksAdmin'
import UpdateStudentProfile from './pages/student/UpdateStudentProfile'
import UpdateFacultyProfile from './pages/faculty/UpdateFacultyProfile'
import FacultyProfile from './pages/faculty/FacultyProfile'
function App() {
  return (
 <div>
  <BrowserRouter>
  <Routes>
    {/* default routings */}
    <Route path='/' element={<Home/>}/>

    {/* Admin Routing */}
    <Route path='/admin' element={<AdminHome/>}/>
    <Route path='/allEvents' element={<AllEvents/>}/>
    <Route path='/adminlogin' element={<AdminLogin/>}/>
  <Route path='/allfaculties' element={<AllFaculties/>}/>
  <Route path='/updateStudent/:studentID' element={<UpdateStudent/>}/>
  <Route path='/updateFaculty/:facultyId'element={<UpdateFaculty/>}/>
  <Route path='/adminUpdateEvent/:eventId' element={<UpdateEventAdmin/>}/>
  <Route path='/feedbacksAdmin' element={<ViewFeedbacksAdmin/>}/>


{/* Student Routings */}
  <Route path='/RegisterStudent' element={<RegisterStudent/>}/>
  <Route path='/selectSignIn' element={<SelectSignIn/>}/>
  <Route path='/selectRegister' element={<SelectRegister/>}/>
  <Route  path='/upcomingEvents' element={<UpcomingEvents/>}/>
  <Route path='/sprofile' element={<StudentProfile/>}/>
  <Route path='/allstudent' element={<AllStudents/>}/>
  <Route path='/updateProfile/:userId' element={<UpdateStudentProfile/>}/>
  <Route path='/raisequery' element={<RaiseQuery/>}/>
  <Route path='historyEventStudent' element={<HistoryEventStudent/>}/>
  <Route path='/ratings' element={<Ratings/>}/>
<Route path='/registeredEvents' element={<ViewEventsRegistered/>}/>
  <Route path='/student' element={<StudentHome/>}/>
  <Route path='/eventDetails/:id' element={<EventDetails/>}/>
<Route path='/checkmail/:email' element={<CheckEmail/>}/>
<Route path='/feedback/:eventId' element={<Ratings/>}/>
  {/* Faculty Routings */}
<Route path='/forget' element={<Forgotpassword/>}/>
<Route path='/RegisterFaculty' element={<RegisterFaculty/>}/>
  <Route path='/faculty' element={<FacultyHome/>}/>
  <Route path='/addevent' element={<AddEvent/>} />
  <Route path='/updateevent/:eventID' element={<UpdateEvent/>}/>
<Route path='/historyFaculty' element={<HistoryEventFaculty/>}/>
<Route path='/viewEventFaculty' element={<ViewEventFaculty/>}/>
<Route path='/allUsersFaculty' element={<ViewUsers/>}/>
<Route path='/queriesFaculty' element={<ViewQueriesFaculty/>}/>
<Route path='/registerEvent/:eventID/:amount' element={<EventRegistrationStudent/>}/>
<Route path='/checkmailFac/:email' element={<CheckEmailFaculty/>}/>
<Route path='/queriesFac' element={<RaiseQueryFac/>}/>
<Route path='/feedbackFaculty' element={<ViewFeedbacksFaculty/>}/>
<Route path='/facultyProfile' element={<FacultyProfile/>}/>
<Route path='/updateFacultyProfile/:facultyId' element={<UpdateFacultyProfile/>}/>
  </Routes>
  </BrowserRouter>
<ToastContainer/>
 </div>
  )
}

export default App
