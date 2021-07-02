
import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { CharacterBox } from '../CharacterBox';
import styles from './styles.module.scss';

export function FavoriteList() {
  const { favoriteList, handleRemoveFavoriteCharacter } = useContext(SearchContext);
  return (
    <div className={styles.container}>
      <h1>Personagens Favoritos</h1>
      {favoriteList.map(character => (
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
          <button type="button" onClick={() => handleRemoveFavoriteCharacter(character.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}