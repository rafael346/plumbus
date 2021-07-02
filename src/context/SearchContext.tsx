import { useState, ReactNode, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

import { api } from "../services/api";

type Character = {
  id: string;
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

type SearchContextData = {
  name: string;
  loading: boolean;
  setName: (name: string) => void;
  loadCharacters: () => Promise<void>;
  characters: Character[];
  handleCreateFavoriteCharacter: (Character: Character) => void;
  handleRemoveFavoriteCharacter: (id: string) => void;
  favoriteList: Character[];
}

type SearchContextProps = {
  children: ReactNode;

}

export const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export function SearchProvider({ children }: SearchContextProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  function handleCreateFavoriteCharacter(Character: Character) {
    const newFavoriteList = {
      id: uuidv4(),
      image: Character.image,
      name: Character.name,
      status: Character.status,
      species: Character.species,
      type: Character.type,
      gender: Character.gender,
    }
    setFavoriteList(exitingList => [...exitingList, newFavoriteList]);
  }

  function handleRemoveFavoriteCharacter(id: string) {
    const favoriteListRemover = favoriteList.filter(character => character.id != id);
    setFavoriteList(favoriteListRemover)
  }

  async function loadCharacters() {
    try {
      setLoading(false);
      const response = await api.get(`character/?name=${name}`);
      setLoading(true);
      setCharacters(response.data.results);

    } catch (err) {
      setLoading(false);
      toast.error('Esse personagem não existe!');
      setLoading(true);
    }
  }

  return (
    <SearchContext.Provider value={{
      characters,
      favoriteList,
      loading,
      name,
      setName,
      loadCharacters,
      handleCreateFavoriteCharacter,
      handleRemoveFavoriteCharacter
    }}>
      {children}
    </SearchContext.Provider>
  )
}