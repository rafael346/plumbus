import styles from './styles.module.scss';

type CharacterProps = {
  id: string;
  image: string;
  species: string;
  name: string;
}

export function CharacterBox({ name, image, species, id }: CharacterProps) {
  function handleTeste() {
    console.log('funciona');
  }
  return (
    <a onClick={ }>
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