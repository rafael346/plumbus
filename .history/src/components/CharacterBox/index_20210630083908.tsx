import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { api } from '../../services/api'


export function CharacterBox() {

  const alive = true;

  return (

    <div className={styles.container}>
      <img className={styles.image} src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='Rick' />
      <div className={styles.content}>
        <div className={styles.text}>
          <strong>Rick Sanchez</strong>
          <span>Human</span>
        </div>
        <div className={styles.status}>
          <span>Vivo</span>
        </div>
      </div>

    </div>


  )
}