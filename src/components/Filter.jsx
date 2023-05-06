import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTypes } from "../store/slices/typesOfPokemons"
import axios from "axios"
import { changetypefilter } from "../store/slices/typefilter.slice"



const Filter = () => {
    const dispatch = useDispatch()
    const typesOfPokemons = useSelector(state=>state.typesOfPokemons)
    const onChangeHandler = (e) =>{
      dispatch(changetypefilter(e.target.value));
    }

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/type')
        .then(res=> dispatch(setTypes(res.data.results)))
        .catch(err=>console.log(err))
    },[])



  return (
    <form className="border py-1 px-3 rounded-sm shadow-md w-[13rem] md:w-[17rem]"  action="">
        <select className="w-full" onChange={onChangeHandler}  name="" id="">
          <option value="null">Todos los Pokemons</option>
            {
              typesOfPokemons.map((type, i) => (
                <option key={i}   value={type}>{type}</option>
              ))
            }
        </select>
    </form>
  )
}
export default Filter