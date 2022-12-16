// import Head from "next/head";
// import { useEffect } from "react";

import { useEffect } from "react";

// import styles from "../styles/Home/Home.module.css";
export default function Home({handleAuth,token}) {
  
  useEffect(() =>{
    if(token) localStorage.setItem("token",JSON.stringify(token))
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
      token:req.cookies.TOKEN
    }
  }
}