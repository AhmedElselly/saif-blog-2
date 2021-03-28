import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
				  <script data-ad-client="ca-pub-5117302971351802" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
				  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet"/>
          <script src="https://kit.fontawesome.com/961ec06871.js" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript/>
          	
        </body>
      </Html>
    )
  }
}

export default MyDocument;