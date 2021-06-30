import styles from './styles.module.scss';

type CharacterProps = {
  image: string;
  species: string;
  name: string;
}

export function CharacterBox({ name, image, species }: CharacterProps) {

  return (
    <a>
      <div className={styles.container}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.content}>
          <strong>{name}</strong>
          <span>{species}</span>
        </div>
      </div>
    </a>

  )
}