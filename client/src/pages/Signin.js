
import { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import './signin.css';

const Signin = () => {
    const [user,setUser]=useState({
        username:"",
        password:""
    })
 
    const handleChange = e => {
         const { name , value } = e.target
         setUser({
             ...user,
             [name]:value
         })
    }
    return ( 
        <div className="body">
            <ParticleBackground/>
        <div className="login">
            <h2 style={{color:'white',margin:'10px'}}>SignIn</h2>
            <div className="inputCont">
                <p>Username:</p>
                <input type='text' placeholder='Enter your email here'></input>
            </div>
            <div className="inputCont">
                <p>Password:</p>
                <input type='text' placeholder='Enter your password here'></input>
            </div>
            
            
            <div className="loginbtn">Login</div>
        </div>
        <div className="reg">
            New to Music+ ?
            <a href='/signup'>Create account</a>
        </div>
        </div>
     );
}
 
export default Signin;

