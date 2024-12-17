import React from 'react'


const Forgotpassword = () => {
  return (
    <div className='back-color'>
        <div className="register">
            <h5 className='register-title'>Forgot Password</h5>
            <form action="submit" className='forms'>
                <label className='input-name' >Email</label><br />
                <input type='email' className='inputs' /><br /><br />

                <label className='input-name' >password</label><br />
                <input type='text' className='inputs' /><br /><br />
                <button type='submit'className=' inputs  mb-3 back-color text-white  ' >Forgot Password</button>
            </form>
        </div>
      
    </div>
  )
}

export default Forgotpassword