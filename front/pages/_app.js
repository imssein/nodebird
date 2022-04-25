import "antd/dist/antd.css";
import Head from "next/head";
import PropTypes from "prop-types";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
App.propTypes = {
    Component: PropTypes.elementType.isRequired,
  }