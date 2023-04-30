import Image from "next/image";
import router from "next/router";
import React from "react";
import styles from "./style.module.css";
export default function StudentProfilePage() {
  return (
    <div>
      <button
        onClick={() => router.back()}
        className={styles.button}
      >
        Back
      </button>
      <div className="justify-center items-center flex inset-0 z-50 ">
        <div className={styles.modalBody}>
          <div className="relative p-6 ">
            <div className={styles.modalContent}>
              <Image
                src={`/Ellipse.png`}
                alt="hi"
                width={100}
                height={100}
                style={{ margin: "10px" }}
              />
              <h1>Shaukat Ali</h1>
              <h2 style={{ fontSize: "1.5rem" }}>
                Contact: <span style={{ fontWeight: "bold" }}>7654831436</span>
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
                Roll No: <span style={{ fontWeight: "bold" }}>21CH10059</span>
              </h2>
              <h2 style={{ fontSize: "1.5rem" }}>
                Block: <span style={{ fontWeight: "bold" }}>E</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
