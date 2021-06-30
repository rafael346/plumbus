import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CharacterBox } from '../components/CharacterBox';
import { api } from '../services/api';

import styles from '../styles/home.module.scss';

type Character = {
  image: string;
  species: string;
  name: string;
}

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    api.get('character/?name=rick').then(response => setCharacters(response.data.results))
  }, [])


  return (
    <div className={styles.searchList}>
      <Head>
        <title>Home</title>
      </Head>
      {characters.map(character => (
        <CharacterBox name={character.name} image={character.image} species={character.species} />
      ))}


    </div>
  )
}
