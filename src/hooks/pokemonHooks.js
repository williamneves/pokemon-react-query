import axios from "axios";

// Create a new axios instance
const axiosInstance = axios.create( {
  baseURL: "https://pokeapi.co/api/v2",
} );

// Fetch all pokemon
export const fetchAllPokemon = async () => {
  const { data } = await axiosInstance.get( "/pokemon" );
  console.log( "fetchAllPokemon", data );
  return data;
}

// Fetch a single pokemon
export const fetchPokemon = async ( pokemonName = null, pokemonID = null ) => {
  const { data } = await axiosInstance.get( `/pokemon/${pokemonName || pokemonID}` );
  console.log( "fetchPokemon", data );
  return data;
}