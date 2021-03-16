import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
   
 
  render() {
    return (
      <Html>
        <Head>
        <link  asyc rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
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