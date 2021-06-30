import { useState } from 'react';
import Modal from 'react-modal'

export function DetailsModal() {
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