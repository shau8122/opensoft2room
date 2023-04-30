import Link from "next/link";
import React from "react";
import styles from "./style.module.css";
export default function LoginPage() {
  return (
    <div>
      <div className={`container  mx-auto ${styles.loginpage}`}>
        <h1 style={{ marginTop: "20px", fontSize: "2.5rem" }}>LOGiN</h1>
        <Link
          href="/StudentHome"
          style={{
            marginTop: "5rem",
            fontSize: "2.5rem",
            background: "#B55D5D",
            borderRadius: "15px",
            width: "60%",
          }}
        >
          <button>STUDENT</button>
        </Link>
        <Link
          href="/AdminHome"
          style={{
            marginTop: "0.5rem",
            fontSize: "2.5rem",
            background: "#B55D5D",
            borderRadius: "15px",
            width: "60%",
          }}
        >
          <button>ADMIN</button>
        </Link>
      </div>
    </div>
  );
}
