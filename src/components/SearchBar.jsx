import { useForm } from "react-hook-form"

const SearchBar = ({handleForm}) => {

const {register, handleSubmit} = useForm()


  return (
    <form className="w-full flex justify-center my-3" onSubmit={handleSubmit(handleForm)} action="">
      <div className="py-1 mt-2 w-[95%] md:w-[27rem]   m-auto grid grid-cols-[75%_25%] max-w-[450px]">
        <input className="border py-1 px-3 rounded-sm shadow-md" {...register('pokeName')} type="text" />
      <button className="bg-red-600 py-1 px-2 text-white rounded-sm">Buscar</button>
      </div>
    </form>
  )
}
export default SearchBar