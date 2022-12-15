// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
    const [size, setSize] = useState(1200);
    const updateSize = () => setSize(window.innerWidth);
    useEffect(() => (window.onresize = updateSize), []);
  return (
    <ChakraProvider>
      <Navbar size={size} />
      <Component {...pageProps} />
      <Footer size={size} />
    </ChakraProvider>
  );
}

export default MyApp;
