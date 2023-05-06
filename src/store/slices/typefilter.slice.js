import { createSlice } from "@reduxjs/toolkit";

const typefilter = createSlice({
    name: 'typefilter',
    initialState: '',
    reducers: {
        changetypefilter: (state, action) =>{
            return action.payload
        }
    }
})

export default typefilter.reducer
export const {changetypefilter} = typefilter.actions