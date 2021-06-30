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
      {characters.map(character => (
        <>
          <img className={styles.image} src={character.image} alt={character.name} />
          <div className={styles.content}>
            <strong>{character.name}</strong>
            <span>{character.species}</span>
          </div>
        </>
      ))}
    </div>


  )
}