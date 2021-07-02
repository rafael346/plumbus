import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { SearchContext } from '../../context/SearchContext';
import { CharacterBox } from '../CharacterBox';
import styles from './styles.module.scss';

export function FavoriteList() {
  const { favoriteList, handleRemoveFavoriteCharacter } = useContext(SearchContext);
  return (
    <div className={styles.container}>
      <h1>Personagens Favoritos</h1>
      {favoriteList.map(character => (
        <div key={character.id} className={styles.boxContent}>
          <CharacterBox
            favorited={true}
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            gender={character.gender}
            type={character.type}
            status={character.status}
          />
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => handleRemoveFavoriteCharacter(character.id)}>
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  )
}