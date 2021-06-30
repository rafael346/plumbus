import { useState } from 'react';
import Modal from 'react-modal'

import styles from './styles.module.scss'

type DetailsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function DetailsModal({ isOpen, onRequestClose }: DetailsModalProps) {


  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>

      </div>
    </Modal>
  )
}