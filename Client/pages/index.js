// import Head from "next/head";
import jwt from "jsonwebtoken";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import styles from "../styles/Home/Home.module.css";
export default function Home({handleAuth}) {
  const router = useRouter();
  let {token} = router.query; 
  useEffect(() =>{
    if(token) localStorage.setItem("token",JSON.stringify(token))
    let toke = JSON.parse(localStorage.getItem("token"))||"";
    if (toke.length > 1) {
      const details = jwt.decode(toke);
      console.log(details)
      if (details.user==="admin")   router.replace("/admin");
       
    }
    handleAuth();
  } , [token]);
  return (
    <div>
      <h1>Index File</h1>
    </div>
  );
}