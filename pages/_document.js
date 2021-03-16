import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
   
 
  render() {
    return (
      <Html>
        <Head>
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