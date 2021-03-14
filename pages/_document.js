import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
   
 
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="RentMyRide" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link
			rel="stylesheet"
			type="text/css"
			href="/css/jquery.datetimepicker.min.css"
			/>
         <link rel="stylesheet" type="text/css" href="/css/style.css" />
		 <link rel="stylesheet" type ="text/css" href="/css/newcustom.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <script src="/js/beautified-bundle.js"></script> */}
      </Html>
    );
  }
}

export default MyDocument;