import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
// import "./login.css"
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send login data to the server here
    const body = {
      Email:email,
      typedPassword:password
    }
    await axios.post("https://sateeshkostu.github.io/loginform/signup/logindetails/", body )
    .then((response) => {
      console.log(response.data.message);
      alert('login succesfull')
      localStorage.setItem('userEmail', JSON.stringify(email));
      navigate('/Todo');

    })
  .catch((error) => {
    console.log(error);
    alert('login failed')
  });
    // console.log("Email:", email);
    // console.log("Password:", password);
    // Redirect to home page after successful login
  };

return (
  <div className="login" style={{ display: 'flex' }}>
    {/* <div className='img'>
                    <img src='https://t4.ftcdn.net/jpg/03/57/34/39/360_F_357343965_u58BFcRrziBVMqgt6liwPHJKcIjHsPnc.jpg' height='100%' width='100%' />
                </div> */}
    <div className="card" style={{ marginTop: '200px', marginLeft: '500px', width: '500px',textAlign:'center', fontSize: '20px' }}>
      <h1>Login Form</h1>
      <p>Please enter your details</p>
      <form style={{ textAlign: 'center', fontSize: '30px' }}>
        <div>
          <label>Email</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            style={{ width: '200px', height: '40px', fontSize:'20px' }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> &nbsp;
        <div>
          <label>Password</label> &nbsp;
          <input
            style={{ width: '200px', height: '40px', fontSize:'20px' }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> <br />
        <div style={{ textAlign: 'center' }}>
          <button style={{ backgroundColor: "blue", color: 'white', fontSize: '30px', borderRadius: '10px' }} onClick={(e) =>  handleSubmit(e) }>Login</button>
        </div>
        <p className="text-center">Don't have an account? <Link to="/Signupform" style={{ color: 'lightblue' }}>Signup</Link></p>
      </form>
    </div>
  </div>
);
};

export default LoginForm;

