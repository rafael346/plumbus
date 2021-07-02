import { useContext, useState } from 'react';
import Modal from 'react-modal'
import { IoMdCloseCircleOutline } from 'react-icons/io'

import styles from './styles.module.scss'
import { SearchContext } from '../../context/SearchContext';





type DetailsModalProps = {
  id: string;
  image: string;
  name: string;
  gender: string;
  status: string;
  species: string;
  type: string;
  isOpen: boolean;
  handleCloseModal: () => void;
}


export function DetailsModal({ id, image, name, gender, status, species, type, isOpen, handleCloseModal }: DetailsModalProps) {
  const { handleCreateFavoriteCharacter } = useContext(SearchContext);

  function handleFavorite() {
    handleCreateFavoriteCharacter({
      id, image, name, gender, status, species, type
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={handleCloseModal}
        className="react-modal-close"
      >
        <IoMdCloseCircleOutline size={40} color="#E52E4D" />
      </button>
      <div className={styles.container}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <label>Informations</label>
        <strong>Gender</strong>
        <span>{gender}</span>

        <strong>Status</strong>
        <span>{status}</span>

        <strong>Specie</strong>
        <span>{species}</span>
        {type ? (
          <>
            <strong>Type</strong>
            <span>{type}</span>
          </>) : ''}
        <button type="button" onClick={handleFavorite}>Favoritar</button>
      </div>
    </Modal>
  )
}

//onClick={() => handleCreateFavoriteCharacter() }