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
        <h1>Informações</h1>
      </div>
    </Modal>
  )
}