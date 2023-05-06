/* eslint-disable react/prop-types */
import { useState } from "react"
import PokemonCard from "./PokemonCard"
import { useSelector } from "react-redux"

const PokemonList = ({postsPerPage, pokemonsByName}) => {
  const currentPage =  useSelector(state => state.pageNumber)

  

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = pokemonsByName.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section>
        <div className="grid w-[80%] grid-cols-1 gap-3 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center m-auto">
        {
            currentPosts?.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)
        }
        </div>
        

        
    </section>
  )
}
export default PokemonList