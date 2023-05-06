import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { changeName } from "../store/slices/userName.slice"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()    
    const {handleSubmit, register} = useForm()

    const handleSubmitName  = (data) => {
        dispatch(changeName(data.name))
        window.localStorage.setItem('name', JSON.stringify(data.name));
        navigate('/pokedex')
    }
    
    return (
    <div className="px-5 h-screen flex flex-col justify-center items-center max-w-[1000px]">

        <div className="m-auto items-center align-center items-center justify-center ">
        <img className="sm:w-[70%] max-w-[100%] align-center m-auto"  src="/imgs/auth/image11.png" alt="" />
        <h2 className="text-red-600 md:mt-5 text-center w-full text-2xl mt-2 font-bold ">¡Hola entrenador!</h2>
        <p className="text-center">Para poder comenzar, dame tu nombre</p>
        <form className="w-[full] flex justify-center m-auto" onSubmit={handleSubmit(handleSubmitName)} action="">
            
            <div className="py-1 mt-2 w-[95%] md:w-[27rem] m-auto grid grid-cols-[75%_25%] max-w-[450px]">
                <input className="border py-1 px-3 rounded-sm shadow-md" {...register('name')} type="text" />
                <button className="bg-red-600 py-1 text-white rounded-sm">Comenzar</button>
            </div>

            
        </form>

        <div className="w-full bg-black h-[20px] z-30 absolute right-0 left-0 bottom-0"></div>
        <div className="w-full bg-red-600 h-[50px] absolute right-0 left-0 bottom-0"></div>
        <div className="w-[38px] bg-black h-[38px] rounded-[50%] z-40 absolute bottom-0 flex align-center items-center justify-center content-end m-[auto]">
            <div className="w-[30px] bg-white h-[30px] rounded-[50%] z-40 absolute flex align-center items-center justify-center content-end">
                <div className="w-[20px] bg-black h-[20px] rounded-[50%] z-50 absolute"></div>
            </div>
        </div>
        </div>

        
    </div>
  )
}
export default Home