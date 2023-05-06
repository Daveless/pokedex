import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name: 'userName',
    initialState: '',
    reducers: {
        changeName: (state, action) => {
            return action.payload }
    }
})

export default userNameSlice.reducer
export const {changeName} = userNameSlice.actions