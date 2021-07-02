import Head from 'next/head';
import Image from 'next/image';
import PacmanLoader from 'react-spinners/PacmanLoader';

import React, { useEffect, useState, FormEvent, useContext } from 'react';
import { SearchList } from '../components/SearchList';
import { AiOutlineSearch } from 'react-icons/ai';

import { api } from '../services/api';

import styles from '../styles/home.module.scss';
import { FavoriteList } from '../components/FavoritesList';
import { SearchContext } from '../context/SearchContext';




export default function Home() {
  const { name, setName, loadCharacters, loading } = useContext(SearchContext);
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setName(name);
    loadCharacters();
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContent}>
        <Head>
          <title>Home</title>
        </Head>
        <Image src="/images/logo.svg" alt="Logo" width={500} height={140} />
        <label>Digite o nome do Personagem</label>
        <div className={styles.inputContainer}>
          <form>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button type="submit" onClick={handleSubmit}><AiOutlineSearch color='#ffff ' /></button>
          </form>
        </div>{loading
          ? (<SearchList />)
          : (<PacmanLoader color="#1ABED6" />)
        }

      </div>
      <FavoriteList />
    </div>
  )
}
