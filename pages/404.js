import Head from 'next/head'

export default function Custom404() {
    return(         
        <div style={{textAlign: 'center'}}>
            <Head>
                <title>BareWorks | 404 Page</title>
                <meta name="description" content="BareWorks 404 PAGE" />
            </Head>
            <h1>404 NOT FOUND</h1>
            <a href="/"><h3>Click here to go back to Home</h3></a>
            <h4>There are no such pages.</h4>
        </div>
    )
  }