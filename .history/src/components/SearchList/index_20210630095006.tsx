import styles from './styles.module.scss';

export function SearchList() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    api.get('character/?name=rick').then(response => {
      setCharacters(response.data.results)
      console.log(characters);
    })
  }, [])
  return (
    <div className={styles.container}>


      {characters.map(character => (
        <CharacterBox name={character.name} image={character.image} species={character.species} />
      ))}
    </div>

  )
}