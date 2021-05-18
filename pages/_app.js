import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Header from '../components/layouts/Header'
import NavBar from '../components/layouts/NavBar'
import Footer from '../components/layouts/Footer'
import Head from 'next/head';
import { UserContext } from '../utils/UserContext'

function MyApp({ Component, pageProps }) {
  const [ user, setUser ] = useState({})


  return(
    <div>
      <Head>
        <title>BareWorks | Buy and Sell video game items</title>
        <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
        />
        <link rel="icon" type="image/png" href="/invertedsiloicon.png" />

        {/* Start Tawk.to Script  */}
          {/* Add Tawk.to Script for live chat */}
        {/* End Tawk.to Script  */}

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
