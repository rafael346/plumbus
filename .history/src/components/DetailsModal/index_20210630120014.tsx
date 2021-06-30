import { useState } from 'react';
import Modal from 'react-modal'

import styles from './styles.module.scss'

type DetailsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function DetailsModal({ isOpen, onRequestClose }: DetailsModalProps) {


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className={styles.container}>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
        <h1>Rick Sanchez</h1>
        <label>Informações</label>
        <strong>Gênero</strong>
        <span>Male</span>
        <strong>Gênero</strong>
        <span>Male</span>
        <strong>Gênero</strong>
        <span>Male</span>
      </div>
    </Modal>
  )
}