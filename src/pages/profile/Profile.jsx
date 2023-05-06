import React from 'react'
import "./profile.css"
import Navbar from '../../components/navbar/Navbar'
import { useAuthContext } from '../../contexts/authContext/AuthContext'
import { Link } from 'react-router-dom'


function Profile() {
    const { user } = useAuthContext()
    // console.log(user);
  return (
    <>
        <Navbar />
    <div className='profile-container'>
        <div className="profile-section">
            <div className='profile-section_left'>
            {
                user && (
                    <>
                        <img src= {require("../../assets/avatar.png") }  alt="" />
                    </>
                )
            }
            </div>
            <div className="profile-section_right">
            {
                user && (
                    <>
                        <div>Firstname: {user.firstName} </div>
                        <div>Lastname: {user.lastName} </div>
                        <div>Address: {user.address.address} </div>
                        <div>E-mail: {user.email} </div>
                    </>
                )
            }
            </div>
            <div>
            {
                !user && (
                    <>
                        <div className='default-links'>
                            <Link to={"/login"}>
                                You have to log in to see profile page
                            </Link>
                            <Link to={"/signup"}>
                                If you do not have an account, click here for signup 
                            </Link>
                        </div>
                    </>
                )
            }
            </div>
        </div>

    </div>
    </>
  )
}

export default Profile