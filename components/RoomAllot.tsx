import Image from "next/image";
import router from "next/router";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Input } from "postcss";
export default function RoomAllot() {
  const [fvalue, setFvalue] = useState({
    roomNo:"",
    contactNo:"",
    email:"",
    name:""
  });
  
  const handleSelectChange = (event: { target: [any, any]; }) => {
    const [value,label]= event.target;
    
  };
  
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'pear', label: 'Pear' },
  ];
  return (
    <div>
      <button onClick={() => router.back()} className={styles.button}>
        Back
      </button>
      <div className="justify-center items-center flex inset-0 z-50 ">
        <div className={styles.modalBody}>
          <div className="relative p-6 ">
            <div className={styles.modalContent}>
              <label htmlFor="roomNo">Select Room:</label>
              <Dropdown
                options={options}
                onChange={handleSelectChange}
                value={fvalue.roomNo}
                placeholder="Select an option"
              />
              <label htmlFor="studentName">Select Student:</label>
              <Dropdown
                options={options}
                onChange={handleSelectChange}
                value={fvalue.name}
                placeholder="Select an option"
              />
              <label htmlFor="contactNO">Enter Contact:</label>
             <input type="text" value={fvalue.contactNo} placeholder="Enter Contact"/>
              <label htmlFor="email">Enter Email:</label>
              <input type="email" value={fvalue.email} placeholder="Enter Email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}