import "../styles/global.css";

import Head from "next/head";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>In Wonder I Trust</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <main className="main-container">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
