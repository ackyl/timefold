import "../styles/global.css";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
