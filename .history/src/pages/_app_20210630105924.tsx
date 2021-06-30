import { AppProps } from 'next/app'
import Head from 'next/head';



import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>

      <Head>
        <link rel="shortcut icon" href="/icons/plumbus.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
