// import Head from "next/head";
// import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import styles from "../styles/Home/Home.module.css";
export default function Home({handleAuth,token}) {
  const router = useRouter();
  useEffect(() =>{
    if(token) localStorage.setItem("token",JSON.stringify(token))

    let toke = JSON.parse(localStorage.getItem("token"))||"";
    if (toke.length > 1) {
      const details = jwt.decode(toke);
      console.log(details)
      if (details.user==="admin")   router.replace("/admin");
       
    }
    handleAuth();
  } , []);
  return (
    <div>
      <h1>Index File</h1>
    </div>
  );
}
export function getServerSideProps({req,res}){
  return {
    props:{
      token:req.cookies.TOKEN|| ""
    }
  }
}