import React from 'react'
import "./profile.css"
import Navbar from '../../components/navbar/Navbar'
import { useAuthContext } from '../../contexts/authContext/AuthContext'


function Profile() {
    const { user } = useAuthContext()
    console.log(user);
  return (
    <>
        <Navbar />
    <div className='profile-container'>
        <div className="profile-section">
            <div className='profile-section_left'>
                <img 
                src= {user.image
                    ? user.image
                    : require("../../assets/avatar.png") }  
                alt="Profile img" />
            </div>
            <div className="profile-section_right">
                <div>Username: {user.username} </div>
                <div>Firstname: {user.firstName} </div>
                <div>Lastname: {user.lastName} </div>
                <div>E-mail: {user.email} </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Profile