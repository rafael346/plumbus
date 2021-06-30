import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
})

/*const [results, setResults] = useState([])
  useEffect(() => {
    api.get('character/?name=rick').then(response => {
      console.log(results)
    })
  }, []) */