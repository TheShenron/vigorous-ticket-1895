import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        add(state , action){
            initialState.push(action.payload)
        }
    }
})

export const {add} = cartSlice.actions
export default cartSlice.reducer