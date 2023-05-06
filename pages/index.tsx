import { Inter } from "next/font/google";
import LoginPage from "@/components/LoginPage";
import StudentState from "@/context/students/StudentState";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
      <LoginPage/>
   
  );
}
