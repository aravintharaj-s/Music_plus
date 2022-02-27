import { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import './register.css';
import { useHistory} from 'react-router-dom';

const Register = () => {
    const history=useHistory();
   const [user,setUser]=useState({
       name:"",
       username:"",
       password:"",
       cpassword:""
   })

   const handleChange = (e) => {
        const { name , value } = e.target
        setUser({
            ...user,
            [name]:value
        })
   }

   const PostData = async (e) => {
        e.preventDefault();

        const {name,username,password,cpassword} = user;
        const res = await fetch('/signup',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,username,password,cpassword
            })
        });

        const data= await res.json();

        if(data.status === 422 || !data)
        {
            window.alert('Invalid Registration');
            console.log('Invalid Registration');
        }
        else{
            window.alert('Successful Registration');
            console.log('Successful Registration');

            history.push('/signin');
        }
   }

    return ( 
        <div className="body">
            <ParticleBackground/>
            <form method='POST' className='login' id='register-form'>
            <h2 style={{color:'white',margin:'10px',textAlign:'center'}}>SignUp</h2>
            
            <div className="inputCont">
                <p>Name</p>
                <input type="text" name="name"  placeholder="Your Name" value={user.name} onChange={handleChange}></input>
            </div>
            <div className="inputCont">
                <p>Username</p>
                <input type="text" name="username"  placeholder="Your Email" value={user.username} onChange={handleChange} ></input>
            </div>
            <div className="inputCont">
                <p>Password</p>
                <input type="password" name="password"  placeholder="Your Password" value={user.password} onChange={handleChange} ></input>
            </div>
            <div className="inputCont">
                <p>Verify Pasword</p>
                <input type="password" name="cpassword"  placeholder="Re-enter Password" value={user.cpassword} onChange={handleChange} ></input>
            </div>
            <div className="loginbtn" onClick={PostData} >Register</div>
            </form>        
        <div className="reg">
            Already in Music+? 
            <a href='/signin'>SignIn</a>
        </div>
        </div>
     );
}
 
export default Register;