import { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import './register.css';

const Register = () => {

   const [user,setUser]=useState({
       name:"",
       username:"",
       password:"",
       cpassword:""
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
            <h2 style={{color:'white',margin:'10px'}}>SignUp</h2>
            <div className="inputCont">
                <p>Name</p>
                <input type="text" name="name"  placeholder="Your Name" ></input>
            </div>
            <div className="inputCont">
                <p>Username</p>
                <input type="text" name="email"  placeholder="Your Email" ></input>
            </div>
            <div className="inputCont">
                <p>Password</p>
                <input type="password" name="password"  placeholder="Your Password" ></input>
            </div>
            <div className="inputCont">
                <p>Verify Pasword</p>
                <input type="password" name="reEnterPassword"  placeholder="Re-enter Password" ></input>
            </div>
            <div className="loginbtn">Register</div>
        </div>
        <div className="reg">
            Already in Music+? 
            <a href='/signin'>SignIn</a>
        </div>
        </div>
     );
}
 
export default Register;