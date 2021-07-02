import { AppProps } from 'next/app'
import Head from 'next/head';
import React from 'react';
import { SearchProvider } from '../context/SearchContext';



import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SearchProvider>
      <Head>
        <link rel="shortcut icon" href="/icons/plumbus.ico" />
      </Head>
      <Component {...pageProps} />
    </SearchProvider>
  )
}

export default MyApp
