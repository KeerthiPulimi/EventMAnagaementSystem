import React from 'react'

const Login = () => {
  return (
    <div>
         <div className='bodyss'>
         <div className="registration-form">
    <form>
        <h3>Login here</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control item"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="form-group mt-2">
        <input
          type="password"
          className="form-control item"
          id="password"
          placeholder="Password"
        />
      </div>
      
      
      
      <div className="form-groups">
        <a href='/Dashboard' type="button" className="btn btn-block create-account me-1 ">
          Login here
        </a>
        <a href='/Register' type="button" className="btn btn-block create-account">
          Sign Up
        </a>
      </div>
      
    </form>
  </div>
    </div>
    <style jsx="true">
        {`
        .bodyss{
    height: 700px;
    background-image: url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/karaoke-night-design-template-19320395500bd2c185a114890c79cd42_screen.jpg?ts=1698304661');
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: lighten;
     
}
.registration-form{
	padding: 50px 0;
    height: 500px;
}
.registration-form form{
    background-color: #fff;
    max-width: 600px;
    margin: auto;
    padding: 50px 70px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
    border-radius: 20PX;
}
.registration-form .create-account{
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #5791ff;
    border: none;
    color: white;
    margin-top: 20px;
}

        `}
    </style>
    </div>
  )
}

export default Login