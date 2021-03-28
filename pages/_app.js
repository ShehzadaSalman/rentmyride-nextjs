
import 'bootstrap/dist/css/bootstrap.css'
import '../public/css/oldcss.css'
// import '../public/css/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextNprogress from 'nextjs-progressbar';
import 'react-day-picker/lib/style.css';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return <> 
  <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
<Component {...pageProps} /> </>
}

export default MyApp
