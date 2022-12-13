import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <Navar></Navar> */}
      <Component {...pageProps} />
      {/* <Footer></Footer> */}
    </div>
  );
}

export default MyApp;
