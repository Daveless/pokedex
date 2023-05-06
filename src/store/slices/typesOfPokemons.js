import { createSlice } from "@reduxjs/toolkit";

const typesOfPokemonsSlice = createSlice({
  name: "typesOfPokemons",
  initialState: [],
  reducers: {
    setTypes: (state, action) => {
        return action.payload.map((e)=>e.name)
    }
  },
});

export default typesOfPokemonsSlice.reducer;
export const { setTypes } = typesOfPokemonsSlice.actions;
