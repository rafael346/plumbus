import { useState } from 'react';
import { DetailsModal } from '../DetailsModal';
import { ImEye } from 'react-icons/im'
import styles from './styles.module.scss';

type CharacterProps = {
  id: string;
  image: string;
  name: string;
  species: string;
  gender: string;
  type: string;
  status: string;
  favorited: boolean;
}

export function CharacterBox(
  { id,
    name,
    image,
    species,
    gender,
    type,
    favorited = false,
    status }: CharacterProps) {

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
        <button type="button" className={styles.viewButton} onClick={handleOpenModal}>
          <ImEye />
        </button>
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
        favorited={favorited}
      />
    </div>
  )
}