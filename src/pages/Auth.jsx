import { useDispatch, useSelector } from "react-redux"
import Pokedex from "./Pokedex"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { changeName } from "../store/slices/userName.slice"

const Auth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = window.localStorage.getItem('name');
    
    
    useEffect(() => {
        
        dispatch(changeName(data))
        
        if(!data?.length){

            setTimeout(() => {

                navigate('/')
              }, "3000");
            
        }
    })

    return(
        data?.length ? <Pokedex/> : <h2>No hay usuario, redirigiendo a la página principal</h2>
    )
    
  
}
export default Auth