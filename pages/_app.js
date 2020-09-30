import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Header from '../components/layouts/Header'
import NavBar from '../components/layouts/NavBar'
import Footer from '../components/layouts/Footer'
import Head from 'next/head';
import { UserContext } from '../utils/UserContext'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({})


  return(
    <div>
      <Head>
        <title>RPGStock | Buy and Sell video game items</title>
        <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
        />
        <link rel="icon" type="image/png" href="/rpgstock-icon-temp.png" />

        {/* <!-- Start of rpgstock Zendesk Widget script --> */}
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=ea493b8a-3c9c-46c2-96b4-0380c01d7ef0"> </script>
        {/* <!-- End of rpgstock Zendesk Widget script --> */}

        {/* Start TrustPilot Script */}
          <script type="text/javascript" 
            src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async>
          </script>
        {/* End TrustPilot Script */}
      </Head>
      <div className="page-container" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <div className="content-wrap" style={{flex: '1'}}>
          <Header />
          <NavBar />
          <UserContext.Provider value={{user, setUser}}>
            <Component {...pageProps} />
          </UserContext.Provider>   
          
        </div>
        <Footer />
      </div>
    </div>)     
}

export default MyApp
