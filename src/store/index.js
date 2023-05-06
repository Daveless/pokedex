import { configureStore } from "@reduxjs/toolkit";
import userName from './slices/userName.slice'
import pageNumber from "./slices/pageNumber.slice";
import typesOfPokemons from "./slices/typesOfPokemons";
import typefilter from "./slices/typefilter.slice"

export default configureStore({
    reducer: {
        userName,
        pageNumber,
        typesOfPokemons,
        typefilter
    }
})


