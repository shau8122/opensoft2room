import LoginForm from "@/components/LoginForm";
import StudentContext from "@/context/students/StudentContext";
import React, { useContext } from "react";
import styles from "../components/style.module.css";
export default function AdminLogin() {
  const context = useContext(StudentContext);
  const { verifyStudent } = context;
  return (
    <div>
      <div className={`container  mx-auto ${styles.loginpage}`}>
        <h1 style={{ marginTop: "10px", fontSize: "2rem" }}>LOGiN</h1>

        <LoginForm
          texti="Enter Roll no as password"
          loginfor="student"
          handleVerify={verifyStudent}
        />
      </div>
    </div>
  );
}
