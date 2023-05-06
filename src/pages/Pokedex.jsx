import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import axios from "axios"
import { useEffect, useState } from "react"
import PokemonList from "../components/PokemonList"
import Pagination from "../components/Pagination"
import { changePage } from "../store/slices/pageNumber.slice"
import Filter from "../components/Filter"


const Pokedex = () => {
  const userName = useSelector(state => state.userName)
  const [Pokemons, setPokemons] = useState([])
  const [pokemonsByName, setPokemonsByName] = useState([  ])
  const [postsPerPage, setPostsPerPage] = useState(20)
  const dispatch = useDispatch()
  const activeFilter = useSelector(state => state.typefilter)
  
  


  const URL = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=150"
  
  const handleForm = (data) => {
    setPokemonsByName(Pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(data.pokeName.toLowerCase())))
    dispatch(changePage(1))
  }
 

  const currentType = useSelector(state => state.typefilter)


  useEffect( () => {
    axios.get(URL)
    .then(res => {setPokemons(res.data.results)
                  setPokemonsByName(res.data.results)})
    .catch(err => console.error(err))      
    
  }, [])

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/type/'+currentType)
    .then(res => {setPokemonsByName(res.data.pokemon.map(data=>data.pokemon))
      setPokemons(res.data.pokemon.map(data=>data.pokemon))
    })
    .catch(err => console.error(err)) 
  },[currentType])

  

  


  return (
    <section className="bg-white text-black p-5 absolute top-0 right-0 left-0 bottom-0">
      <Header/>
      <div className="max-w-[1100px] m-auto">
      <p className="mt-5"><span className="text-red-500 font-bold">Bienvenido/a {userName.replace(/['"]+/g, '')}</span>, Aquí podrás encontrar tu pokemón favorito</p>
      <div className="flex flex-col md:flex-row w-[15]  justify-around items-center">
        <SearchBar handleForm={handleForm}/>      
        <Filter setPokemonsByName={setPokemonsByName}/>
      </div>
      <PokemonList Pokemons={Pokemons} pokemonsByName={pokemonsByName} postsPerPage={postsPerPage}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={pokemonsByName?.length}  />
      </div>
    </section>
  )
}
export default Pokedex