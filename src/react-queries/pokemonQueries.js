import * as api from "../hooks/pokemonHooks";

import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export const getPokemonByName = ( pokemonName ) => {
  console.log( "getPokemonByName", pokemonName );
  return useQuery( [ "pokemon", pokemonName], () => api.fetchPokemon( pokemonName ), {
    enabled: !!pokemonName,
  } );
}

export const getPokemonByID = ( pokemonID ) => {
  return useQuery( [ "pokemon", pokemonID], () => api.fetchPokemon( null, pokemonID ), {
    enabled: !!pokemonID,
  } );
}