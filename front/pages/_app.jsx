import 'antd/dist/antd.css'
import Head from 'next/head'; 
import PropTypes from 'prop-types';

const App = ( {Component }) => {
    return( 
        <>
        <Head>
            <meta charSet="utf-8" />
            <title>NodeBird</title>
        </Head>
        
        <Component /> 
        </>
    )
}
// propTypes를 하면 안정성을 높일 수 있음 
App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;