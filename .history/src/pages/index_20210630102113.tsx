import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { SearchList } from '../components/SearchList';

import { api } from '../services/api';

import styles from '../styles/home.module.scss';


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <input type="text" placeholder="Digite o nome do personagem" />
      <SearchList />
    </div>
  )
}
