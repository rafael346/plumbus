import Head from 'next/head';
import Image from 'next/image';

import React, { useEffect, useState, FormEvent } from 'react';
import { SearchList } from '../components/SearchList';
import { AiOutlineSearch } from 'react-icons/ai';

import { api } from '../services/api';

import styles from '../styles/home.module.scss';
import { FavoriteList } from '../components/FavoritesList';



export default function Home() {






  return (
    <div className={styles.container}>
      <div className={styles.searchContent}>
        <Head>
          <title>Home</title>
        </Head>
        <Image src="/images/logo.svg" alt="Logo" width={500} height={140} />
        <div className={styles.input}>

          <AiOutlineSearch color='#757575 ' />
          <form>
            <input type="text" placeholder="Nome do personagem" />
            <button type="submit">Procurar</button>
          </form>
        </div>
        <SearchList />
      </div>
      <FavoriteList />
    </div>
  )
}
