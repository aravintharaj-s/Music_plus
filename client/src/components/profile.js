import React from 'react'
import './profile.css'
import {CgUser,CgChevronDown} from 'react-icons/cg';

function Profile() {
  return (
    <div className="profile">
        <div className="drop">
            <CgUser style={{fontSize:'20px',color:'white',margin:"5px"}}/>
            User
            <CgChevronDown style={{fontSize:'20px',color:'white',margin:"5px"}}/>
        </div>
    </div>
  )
}

export default Profile
