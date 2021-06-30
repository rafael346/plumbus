import axios from 'axios';

const api_characters = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
})