
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import './signin.css';

const Signin = () => {
    const history=useHistory;
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

    const loginUser = async (e) => {
        e.preventDefault();
        const {username,password} = user;
        const res = await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username,password
            })
        });

        const data= await res.json();

        if(data.status === 400 || !data)
        {
            window.alert('Invalid Login');
            console.log('Invalid Login');
        }
        else{
            window.alert('Successful Login');
            console.log('Successful Login');

            history.push("/");
        }
   }

    return ( 
        <div className="body">
            <ParticleBackground/>
        <form method="POST" className="login" >
            <h2 style={{color:'white',margin:'10px'}}>SignIn</h2>
            <div className="inputCont">
                <p>Username:</p>
                <input type='text' name="username" placeholder='Enter your username here' value={user.username} onChange={handleChange} ></input>
            </div>
            <div className="inputCont">
                <p>Password:</p>
                <input type='text' name="password" placeholder='Enter your password here'  value={user.password} onChange={handleChange} ></input>
            </div>
            
            
            <div className="loginbtn" onClick={loginUser}>Login</div>
        </form>
        <div className="reg">
            New to Music+ ?
            <a href='/signup'>Create account</a>
        </div>
        </div>
     );
}
 
export default Signin;

