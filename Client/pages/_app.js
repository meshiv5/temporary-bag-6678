// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [isAuth,setAuth] = useState(false)
    const [size, setSize] = useState(1200);
    const updateSize = () => setSize(window.innerWidth);
    const handleAuth = ()=>{
      let flag = JSON.parse(localStorage.getItem("token"))? true : false;
      setAuth(flag)
    }
    useEffect(() => (window.onresize = updateSize), []);
  return (
    <ChakraProvider>
      <Navbar size={size} isAuth={isAuth} handleAuth={handleAuth}/>
      <Component {...pageProps} />
      <Footer size={size} />
    </ChakraProvider>
  );
}

export default MyApp;
