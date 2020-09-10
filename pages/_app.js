import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/layouts/Header'
import NavBar from '../components/layouts/NavBar'
import Footer from '../components/layouts/Footer'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
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

        {/* Start Tawk.to Script  */}
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/5edb10009e5f6944228fffe1/default';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();` 
        }}/>
        {/* End Tawk.to Script  */}

        {/* Start TrustPilot Script */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
              a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
              f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
              tp('register', 'VAFZvPe3If0Al5bp');` 
        }}/>
        {/* End TrustPilot Script */}
        
      </Head>
      <div className="page-container" style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <div className="content-wrap" style={{flex: '1'}}>
          <Header />
          <NavBar />

          <Component {...pageProps} />

          
        </div>
        <Footer />
      </div>
    </div>)     
}

export default MyApp
