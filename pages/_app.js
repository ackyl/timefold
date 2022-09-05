import "../styles/global.css";

import Head from "next/head";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>𝖙𝖎𝖒𝖊𝖋𝖔𝖑𝖉</title>
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
