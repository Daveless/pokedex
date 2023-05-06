import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

import Pokemon from "./Pokemon"

const Auth = () => {
    const navigate = useNavigate()
    const data = window.localStorage.getItem('name');
    const { id } = useParams()
    
    useEffect(() => {
        
        if(!data?.length){

            setTimeout(() => {

                navigate('/')
              }, "3000");
            
        }
    })


    return(
        data?.length ? <Pokemon id={id}/> : <h2>No hay usuario, redirigiendo a la página principal</h2>
    )
    
  
}
export default Auth