import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { api } from '../../services/api'

type CharacterBoxProps = {
  image: string;
  species: string;
  name: string;
}

export function CharacterBox() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get('character/?name=rick').then(response => setCharacters(response.data.results))
  }, [])

  return (

    <div className={styles.container}>
      {characters.map(character => {
        return (
          <>
            <img className={styles.image} src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='Rick' />
            <div className={styles.content}>
              <strong>Rick Sanchez</strong>
              <span>Human</span>
            </div>
          </>
        )
      })}
    </div>


  )
}