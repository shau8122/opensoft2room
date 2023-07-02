// import Image from "next/image";
import router from "next/router";
import "react-dropdown/style.css";
import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import AdminContext from "@/context/admins/AdminContext";
export default function RoomAllot() {

  const adminContext = useContext(AdminContext);
  let emptyRooms1 = [
    { roomNo: '101' },
    { roomNo: '102' },
    { roomNo: '103' },
    { roomNo: '104' },
    { roomNo: '105' }
  ];
  const { emptyRooms, notAlloted, updateRooms } = adminContext;
  emptyRooms1=emptyRooms;
  const option1 = emptyRooms1.map((element: any) => ({
    value: element.roomNo,
    label: element.roomNo,
  }));
  const sortNotAlloted = notAlloted.sort(
    (a: { name: string }, b: { name: any }) => a.name.localeCompare(b.name)
  );
  const option2 = sortNotAlloted.map((obj: any) => ({
    value: obj.name,
    label: obj.name,
  }));
  const handleClick = (e: any) => {
    e.preventDefault();
    const data = {
      roomNo:selectedOption1,
      name:selectedOption2
    }
    updateRooms(data);
    setSelectedOption1("");
    setSelectedOption2("");
  };
  const [selectedOption1, setSelectedOption1] = useState('');

  const handleSelectChange1 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption1(event.target.value);
  };
  console.log(selectedOption1);
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleSelectChange2 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption2(event.target.value);
  };
  console.log(selectedOption2);
  
  return (
    <div>
      <button onClick={() => router.back()} className={styles.button}>
        Back
      </button>

      <div className="justify-center items-center flex inset-0 z-50 ">
        <div className={styles.modalBody}>
          <div className="relative p-6 ">
            <div className={styles.modalContent} style={{ color: "black" }}>
              <label htmlFor="roomNo">Select Room:</label>
              <select
                className="appearance-none w-half bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={selectedOption1}
                onChange={handleSelectChange1}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {option1.map((option: { value: number  ; label:  number ; } ) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            
              <label htmlFor="studentName">Select Student:</label>
              <select
                className="appearance-none w-half bg-white border border-gray-300 hover:border-gray-400 px-5 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={selectedOption2}
                onChange={handleSelectChange2}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {option2.map((option: { value: number  ; label:  number ; } ) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
           
            </div>
            <button
              className={styles.button}
              style={{ margin: "20px auto", fontSize: "1.5rem" }}
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
