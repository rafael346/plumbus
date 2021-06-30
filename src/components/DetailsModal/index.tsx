import { useState } from 'react';
import Modal from 'react-modal'
import { IoMdCloseCircleOutline } from 'react-icons/io'


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
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <IoMdCloseCircleOutline size={25} color="#E52E4D" />
      </button>

      <div className={styles.container}>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
        <h1>Rick Sanchez</h1>
        <label>Informações</label>
        <strong>Gênero</strong>
        <span>Male</span>
        <strong>Status</strong>
        <span>Alive</span>
        <strong>Specie</strong>
        <span>Human</span>
        <strong>Type</strong>
        <span>Unknown</span>
        <strong>Location</strong>
        <span>Earth(Replacement Dimension)</span>
        <button>Favoritar</button>
      </div>
    </Modal>
  )
}