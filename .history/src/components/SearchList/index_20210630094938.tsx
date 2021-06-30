import styles from './styles.module.scss';

export function SearchList() {
  return (
    <div className={styles.container}>
      const [characters, setCharacters] = useState<Character[]>([]);

useEffect(() => {
        api.get('character/?name=rick').then(response => {
          setCharacters(response.data.results)
          console.log(characters);
        })
      }, [])

      {characters.map(character => (
        <CharacterBox name={character.name} image={character.image} species={character.species} />
      ))}
    </div>

  )
}