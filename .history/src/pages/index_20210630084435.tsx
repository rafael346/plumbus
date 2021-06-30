import Head from 'next/head';
import React from 'react';
import { CharacterBox } from '../components/CharacterBox';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <CharacterBox />

    </>
  )
}
