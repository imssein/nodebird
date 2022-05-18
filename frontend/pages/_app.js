import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function App({ Component }){
   return (
       // 컴포넌트에 뭔가 들어가냐? index.js의 return 부분이 컴포넌트가 되어서 들어감. 
       // _app.js가 부모, index.js 자식 
       <>
       <Head>
           <meta charSet="utf-8" />
           <title>NodeBird</title>
       </Head>
       <Component />
       </>
   )
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}