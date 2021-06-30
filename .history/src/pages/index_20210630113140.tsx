import Head from 'next/head';
import Image from 'next/image';

import React, { useEffect, useState } from 'react';
import { SearchList } from '../components/SearchList';
import { AiOutlineSearch } from 'react-icons/ai';

import { api } from '../services/api';

import styles from '../styles/home.module.scss';
import { DetailsModal } from '../components/DetailsModal';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.searchContent}>
        <Head>
          <title>Home</title>
        </Head>
        <Image src="/images/logo.svg" alt="Logo" width={500} height={140} />
        <div className={styles.input}>
          <AiOutlineSearch color='#757575 ' />
          <input type="text" placeholder="Nome do personagem" />
        </div>
        <button type="button" onClick={handleOpenModal}>Abrir Modal</button>
        <SearchList />
        <DetailsModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
      </div>



    </div>
  )
}
