import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="main-container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
