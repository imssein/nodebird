import 'antd/dist/antd.css'; 
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta charSet='utf-8' />
      <title>NodeBird</title>
    </Head>
  <Component {...pageProps} />
  </>
  )

}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
}
export default MyApp
