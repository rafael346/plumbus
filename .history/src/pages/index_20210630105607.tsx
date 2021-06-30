import Head from 'next/head';

import React, { useEffect, useState } from 'react';
import { SearchList } from '../components/SearchList';
import { AiOutlineSearch } from 'react-icons/ai';

import { api } from '../services/api';

import styles from '../styles/home.module.scss';


export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.searchContent}>
        <Head>
          <title>Home</title>
        </Head>

        <div className={styles.input}>
          <AiOutlineSearch color='#757575 ' />
          <input type="text" placeholder="Nome do personagem" />
        </div>
        <SearchList />
      </div>



    </div>
  )
}
