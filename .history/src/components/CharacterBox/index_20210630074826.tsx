import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { api } from '../../services/api'


export function CharacterBox() {
  const [results, setResults] = useState([])
  useEffect(() => {
    api.get('character/?name=rick').then(response => {
      setResults(response.data.results);
      console.log(results)
    })
  }, [])
  return (
    <div className={styles.container}>

    </div>
  )
}