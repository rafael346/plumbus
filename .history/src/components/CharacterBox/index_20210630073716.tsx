import { useEffect } from 'react';
import styles from './styles.module.scss';
import { api } from '../../services/api'


export function CharacterBox() {
  useEffect(() => {
    api.get('character/?name=rick').then(data => console.log(data))
  }, [])
  return (
    <div className={styles.container}>

    </div>
  )
}