import React, { useContext, useState} from "react";
import { ImAirplane } from "react-icons/im";
import "./Profile.css";
import { MyContext } from "../Store/store";
import { useNavigate } from "react-router-dom";

const backgroundUrl = "https://images.unsplash.com/photo-1633886036602-d05f76097e67?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Profile() {
  const { userProfile } = useContext(MyContext);
  const navigate=useNavigate()
  const [toggle, setToggle] = useState(false)
  const toggleProfile = () => {
    setToggle(prev=>!prev)
  }
  

  const logoutUser = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <>
      <div className="trigger" onClick={toggleProfile}>
        <img src={userProfile.image ? userProfile.image : backgroundUrl} className="profile-picture" alt="Profile" />
      </div>

      <div className={`overlay ${toggle? "active" : ""}`} onClick={toggleProfile} >
        <div className={`profile ${toggle ? "active" : ""}`}>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={userProfile.image ? userProfile.image : backgroundUrl} className="profile-picture" alt="Profile" />
          </div>
          <div>{(userProfile.firstName && userProfile.lastName) ? `${userProfile.firstName} ${userProfile.lastName}` : "jon doe"}</div>
          <div>{userProfile.email ? userProfile.email : "random@gmail.com"}</div>
          <div className="border"></div>
          <div className="logout-box">
            <ImAirplane className="icon" />
            <h2 className="logout" onClick={logoutUser}>Logout</h2>
          </div>
        </div>
      </div>
    </>
  );
}
