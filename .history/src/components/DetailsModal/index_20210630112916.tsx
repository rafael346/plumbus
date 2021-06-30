import { useState } from 'react';
import Modal from 'react-modal'

type DetailsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function DetailsModal({ isOpen, onRequestClose }: DetailsModalProps) {


  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h1>Teste</h1>
    </Modal>
  )
}