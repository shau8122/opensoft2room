import Image from "next/image";
import router from "next/router";
import React, { useState } from "react";
import styles from "./style.module.css";

export default function AdminHomePage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className={styles.studentTop}>
        <button onClick={() => router.back()} className={styles.button}>
          Back
        </button>
        <button 
        onClick={() => router.push('/AllotRoom')} 
        className={styles.button}>
          Allot Rooms
        </button>
        <button className={styles.button} onClick={() => router.push("/AdminProfile")}>My Profile</button>
      </div>
      <div className={styles.borders}></div>
      <div className="grid grid-cols-6 my-6 gap-4">
        <div className={styles.nameCard} onClick={() => setShowModal(true)}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className={styles.modalBody}>
                <div className="relative p-6 ">
                  <div className={styles.modalContent}>
                    <Image
                      src={`/Ellipse.png`}
                      alt="hi"
                      width={100}
                      height={100}
                      style={{margin:"10px"}}
                    />
                    <h1>Shaukat Ali</h1>
                    <h2 style={{ fontSize: "1.5rem" }}>
                      Contact:{" "}
                      <span style={{ fontWeight: "bold" }}>7654831436</span>
                    </h2>
                    <h2 style={{ fontSize: "1.5rem" }}>
                      Room No: <span style={{ fontWeight: "bold" }}>410</span>
                    </h2>
                    <h2 style={{ fontSize: "1.3rem" }}>
                      Email Id:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        shaukat8122@gmail.com
                      </span>
                    </h2>
                    <h2 style={{ fontSize: "1.5rem" }}>
                      Roll No:{" "}
                      <span style={{ fontWeight: "bold" }}>21CH10059</span>
                    </h2>
                    <h2 style={{ fontSize: "1.5rem" }}>
                      Block: <span style={{ fontWeight: "bold" }}>E</span>
                    </h2>
                  </div>
                </div>
                <div className="flex items-center justify-center p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <div className={styles.nameCard}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
        <div className={styles.nameCard}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
        <div className={styles.nameCard}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
        <div className={styles.nameCard}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
        <div className={styles.nameCard}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
        <div className={styles.nameCard}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
        <div className={styles.nameCard}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
        <div className={styles.nameCard}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
        <div className={styles.nameCard}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
        <div className={styles.nameCard}>
          <h1>
            Shaukat ali <span style={{ fontWeight: "bold" }}>410</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
