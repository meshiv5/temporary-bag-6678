// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "../styles/globals.css";
import SearchBar from "../components/searchbar/searchBar";

export default function MyApp({ Component, pageProps, width }) {
  console.log(width);
  const [look, setLook] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [size, setSize] = useState(1920);
  const updateSize = () => setSize(window.innerWidth);
  const handleAuth = () => {
    let token = JSON.parse(localStorage.getItem("token")) || "";
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
    } else {
      setAuth(false);
    }
  };

  const handleLook = (a) => {
    setLook(a);
  };
  useEffect(() => {
    window.onresize = updateSize;
  }, []);
  // console.log(isAuth)
  return (
    <ChakraProvider>
      {look ? <SearchBar handleLook={handleLook} /> : <Navbar size={size} isAuth={isAuth} handleAuth={handleAuth} handleLook={handleLook} />}
      <Component {...pageProps} handleAuth={handleAuth} />
      <Footer size={size} />
    </ChakraProvider>
  );
}

export function getServerSideProps() {
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return {
    props: {
      width,
    },
  };
}
