import "../public/css/bootstrap.min.css";
import "../public/css/oldcss.css";
import "../public/css/newcss.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-day-picker/lib/style.css";
import Head from "next/head";
import Layout from "../layouts/layout1";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
