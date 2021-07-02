import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { CharacterBox } from '../CharacterBox';

import styles from './styles.module.scss'

export function SearchList() {
  const { characters } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      {characters.map(character => (
        <div key={character.id}>
          <CharacterBox
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            gender={character.gender}
            type={character.type}
            status={character.status}
          />
        </div>
      ))}
    </div>
  )
}
