import React from 'react'
import AdminContext from './AdminContext';

import  {  useState } from "react";

export default function  AdminState(props) {
  const host = "http://localhost:5000";
  const [adminData, setAdminData] = useState({});
  const [adminToken, setAdminToken] = useState("");
  const [isUserAdmin, setIsUserAdmin] = useState(false)
  const verifyAdmin =async (email,password,loginPage)=>{
    const formData = {
      email: email,
      rollNo: password,
    };
    const url = `${host}/${loginPage}login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const user = await response.json();
   
    if (user.authToken) {
      setIsUserAdmin(true);
      setAdminToken(user.authToken);
    }
  }
  const fetchAdminData = async () => {
    const url = `${host}/admindata`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": adminToken,
      },
    });
    const user = await response.json();
    setAdminData(user);
  };
  return (
    <AdminContext.Provider value={{verifyAdmin,adminToken,isUserAdmin,adminData,fetchAdminData}}>
      {props.children}
    </AdminContext.Provider>
  )
}


