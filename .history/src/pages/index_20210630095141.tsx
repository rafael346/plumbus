import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { SearchList } from '../components/SearchList';

import { api } from '../services/api';

import styles from '../styles/home.module.scss';


export default function Home() {

  return (
    <div className={styles.searchList}>
      <Head>
        <title>Home</title>
      </Head>
      <SearchList />
    </div>
  )
}
