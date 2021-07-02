import { FormEvent, useContext } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { AiOutlineSearch } from 'react-icons/ai';
import Head from 'next/head';
import Image from 'next/image';
import { FavoriteList } from '../components/FavoritesList';
import { SearchContext } from '../context/SearchContext';
import { SearchList } from '../components/SearchList';

import styles from '../styles/home.module.scss';

export default function Home() {
  const { name, setName, loadCharacters, loading } = useContext(SearchContext);

  function handleSubmit(event: FormEvent) {
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
        <Image src="/images/logo.svg" alt="Logo" width={400} height={140} />
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
