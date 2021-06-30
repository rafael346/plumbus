import { AppProps } from 'next/app'
import Head from 'next/head';

import { Header } from '../components/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>

      <Head>
        <link rel="shortcut icon" href="/icons/plumbus.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
