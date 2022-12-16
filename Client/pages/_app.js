// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [isAuth, setAuth] = useState(false);
  const [size, setSize] = useState(1200);
  const updateSize = () => setSize(window.innerWidth);
  const handleAuth = () => {
    let token = JSON.parse(localStorage.getItem("token"))||"";
    if (token.length > 1) {
      const details = jwt.decode(token);
      // console.log(details)
      try {
        if (details.email) {
          setAuth(true);
        }
      } catch (e) {
        return console.log(e.message);
      }
    }else {
      setAuth(false);
    }
  };
  useEffect(() => (window.onresize = updateSize), []);
  // console.log(isAuth)
  return (
    <ChakraProvider>
      <Navbar size={size} isAuth={isAuth} handleAuth={handleAuth} />
      <Component {...pageProps} handleAuth={handleAuth} />
      <Footer size={size} />
    </ChakraProvider>
  );
}

export default MyApp;
