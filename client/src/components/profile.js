import React, { useState } from 'react'
import './profile.css'
import {CgUser,CgChevronDown} from 'react-icons/cg';

function Profile() {
    const [isActive,setIsActive]=useState(false);
  return (
    <div className="profile">
        <div className="drop" onClick={(e)=>setIsActive(!isActive)}>
            <CgUser style={{fontSize:'20px',color:'white',margin:"5px"}}/>
            User
            <CgChevronDown style={{fontSize:'20px',color:'white',margin:"5px"}}/>
            {isActive&&(<div className="content">
            <a href="./profile" style={{textDecoration:"none",color:'white'}}> <div className="item"> Profile</div></a>
                <hr style={{backgroundColor: '#00ffff',margin:'0px',padding:'0px',height:'2px'}}/>
                <a href="./" style={{textDecoration:"none",color:'white'}}> <div className="item"> Logout</div></a>
            </div>)}
        </div>
    </div>
  )
}

export default Profile
