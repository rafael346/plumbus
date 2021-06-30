



import styles from './styles.module.scss';

type CharacterProps = {
  id: string;
  image: string;
  species: string;
  name: string;
}

export function CharacterBox({ name, image, species, id }: CharacterProps) {

  return (

    <div className={styles.container}>
      <a>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.content}>
          <strong>{name}</strong>
          <span>{species}</span>
        </div>
      </a>

    </div>
  )
}