import Head from "next/head";
import Script from "next/script";
import React, {useState} from "react";

import * as queries from "../react-queries/pokemonQueries";

export default function Home() {
  
  const [ pokemonName, setPokemonName ] = useState( "" );

  const { data: pokemon, isLoading, refetch } = queries.getPokemonByName( pokemonName );
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex h-[40px] items-center border-b-2 border-slate-600 bg-slate-200 px-10">
        <div className="w-100 flex items-center">
          <span className="mr-5 text-xl">Pokemon Fetch</span>
          <span className="text-xs uppercase text-slate-500">
            Testing React Query
          </span>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center py-2">
        {/* Form with text field to pokemon name */ }
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={ ( event ) => {
            event.preventDefault();
            setPokemonName( event.target.pokemonName.value );
            refetch( );
          } }
        >
          <label htmlFor="pokemonName" className="text-xl">
            Pokemon Name
          </label>
          <input
            id="pokemonName"
            className="border-2 border-slate-600 rounded-md px-2 py-1"
            type="text"
            // value={ pokemonName }
            // onChange={ ( event ) => setPokemonName( event.target.value ) }
          />
          <button
            className="bg-slate-600 text-white rounded-md px-2 py-1 mt-2"
            type="submit"
          >
            Fetch Pokemon
          </button>
        </form>
        {/* Display pokemon data */ }
        {pokemonName  && ( isLoading ? (
          <div className="text-xl">Loading...</div>
        ) : (
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-40 h-40"
                src={ pokemon.sprites.front_default }
                alt={ pokemon.name }
              />
              <div className="text-2xl">{ pokemon.name }</div>
          </div>
        ) )}
      </main>
    </div>
  );
}
