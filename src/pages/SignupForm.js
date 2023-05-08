import React,{useState} from "react";
// import './signup.css';
import { useNavigate, Link } from 'react-router-dom';
import LoginForm from "./LoginForm";
import axios from "axios";

const Signupform = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const body = {
        Username:username,
        Email:email,
        Password:password,
        Confirmpassword:confirmPassword
    }
      await axios.post('https://sateeshkostu.github.io/loginform/signup/signup/',  body )
      .then((response) => {
        console.log(response.data);
        alert('signup succesfull')
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        navigate('/LoginForm');
      })
      .catch((error) => {
        console.log(error);
        alert('signup failed')
      });
    };
  return (
    <>
      <div className="signup">
        <div className="card" style={{marginTop:'180px', marginLeft:'500px', width:'500px', fontSize:'20px'}}>
          <h1>Registration Form</h1>
          <form style={{textAlign:'right', fontSize:'30px'}}>
            <div>
              <label>User Name</label> &nbsp;
              <input style={{width:'200px', height:'35px', fontSize:'20px'}}  type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div> &nbsp;
            <div>
              <label>Email</label> &nbsp;
              <input style={{width:'200px', height:'35px', fontSize:'20px'}}   type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div> &nbsp;
            <div>
              <label>Password</label>  &nbsp;
              <input style={{width:'200px', height:'35px', fontSize:'20px'}}   type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div> &nbsp;
            <div>
              <label>Confirm Password</label>  &nbsp;
              <input style={{width:'200px', height:'35px', fontSize:'20px'}}   type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div> &nbsp;
            <div style={{textAlign:'center'}}>
            <button style={{ backgroundColor: "blue", fontSize:'30px', borderRadius:'10px', color:'white' }} onClick={(e)=>  handleSubmit(e) }>Signup</button>
            </div>
            <p className="text-center">Have already an account <Link to="/LoginForm" style={{color:'lightblue'}}>LoginForm</Link></p>
          </form>
        </div>
      </div>
    </>

  );
}

export default Signupform;