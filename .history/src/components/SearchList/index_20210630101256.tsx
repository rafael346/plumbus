import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { CharacterBox } from '../CharacterBox';

import styles from './styles.module.scss'

type Character = {
  id: string;
  image: string;
  species: string;
  name: string;
}

export function SearchList() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    api.get('character/?name=rick').then(response => {
      setCharacters(response.data.results)
      console.log(characters);
    })
  }, [])
  return (
    <div className={styles.container}>
      {characters.map(character => (
        <a key={character.id}>
          <CharacterBox id={character.id} name={character.name} image={character.image} species={character.species} />
        </a>
      ))}
    </div>

  )
}