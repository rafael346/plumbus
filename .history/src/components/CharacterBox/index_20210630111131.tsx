import { useState } from 'react';

import Modal from 'react-modal'

import styles from './styles.module.scss';

type CharacterProps = {
  id: string;
  image: string;
  species: string;
  name: string;
}

export function CharacterBox({ name, image, species, id }: CharacterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (

    <div className={styles.container}>
      <a onClick={handleOpenModal}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.content}>
          <strong>{name}</strong>
          <span>{species}</span>
        </div>
      </a>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h1>Teste</h1>
      </Modal>
    </div>
  )
}