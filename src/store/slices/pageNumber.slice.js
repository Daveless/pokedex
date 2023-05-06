import { createSlice } from "@reduxjs/toolkit";

const pageNumberSlice = createSlice({
    name: "pageNumber",
    initialState: 1,
    reducers: {
        changePage: (state, action) => {
            return action.payload
        }
    }

})

export default pageNumberSlice.reducer
export const {changePage} = pageNumberSlice.actions