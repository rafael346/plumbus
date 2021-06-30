import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { SearchList } from '../components/SearchList';
import { AiOutlineSearch } from 'react-icons/ai';

import { api } from '../services/api';

import styles from '../styles/home.module.scss';


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={500}
        height={500}
      />
      <div className={styles.input}>
        <AiOutlineSearch color='#757575 ' />
        <input type="text" placeholder="Nome do personagem" />
      </div>
      <SearchList />
    </div>
  )
}
