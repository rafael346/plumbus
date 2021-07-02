import React, { useContext } from 'react';
import { useState } from 'react';
import { DetailsModal } from '../DetailsModal';
import styles from './styles.module.scss';
import { SearchContext } from '../../context/SearchContext';

type CharacterProps = {
  id: string;
  image: string;
  name: string;
  species: string;
  gender: string;
  type: string;
  status: string;
}

export function CharacterBox({ id, name, image, species, gender, type, status }: CharacterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }


  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.content}>
        <strong>{name}</strong>
        <span>{species}</span>
      </div>
      <DetailsModal
        handleCloseModal={handleCloseModal}
        isOpen={isModalOpen}
        id={id}
        name={name}
        image={image}
        species={species}
        gender={gender}
        type={type}
        status={status}
      />
      <button type="button" onClick={handleOpenModal}>teste</button>


    </div>
  )
}