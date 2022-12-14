import Head from "next/head";
import {useEffect} from "react"
import styles from "../styles/Home/Home.module.css";
import {useColorMode} from "@chakra-ui/react"
export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode();
 useEffect(()=>{
  toggleColorMode()
 },[])
  return (
    <div>
      <h1>Home Page Of Zee5</h1>
    </div>
  );
}
