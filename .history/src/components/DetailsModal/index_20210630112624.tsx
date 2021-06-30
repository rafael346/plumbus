import { useState } from 'react';
import Modal from 'react-modal'

type DetailsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function DetailsModal({ isOpen, onRequestClose }: DetailsModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
      <h1>Teste</h1>
    </Modal>
  )
}