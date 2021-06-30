import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { api } from '../../services/api'


export function CharacterBox() {
  const [results, setResults] = useState([])
  useEffect(() => {
    api.get('character/?name=rick').then(response => {
      console.log(results)
    })
  }, [])
  return (

    <div className={styles.container}>
      <img className={styles.image} src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='Rick' />
      <div>
        <strong>Rick Sanchez</strong>
        <span>Human</span>
      </div>
    </div>


  )
}