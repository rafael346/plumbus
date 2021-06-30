import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { api } from '../../services/api'

type CharacterProps = {
  image: string;
  species: string;
  name: string;
}

export function CharacterBox({ name, image, species }: CharacterProps) {
  //  const [characters, setCharacters] = useState<Character[]>([]);

  /*useEffect(() => {
    api.get('character/?name=rick').then(response => setCharacters(response.data.results))
  }, [])
*/
  return (

    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.content}>
        <strong>{name}</strong>
        <span>{species}</span>
      </div>
    </div>


  )
}