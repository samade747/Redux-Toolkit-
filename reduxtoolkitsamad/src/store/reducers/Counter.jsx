import { createSlice } from '@reduxjs/toolkit'

const INTIAL_STATE = {
    count: 1
}

const counter = createSlice({
    name: 'counter',
    initialState: INTIAL_STATE,
    reducers: {
        increment: (state) => {
            return { ...state,  count: state.count += 1}   // state.count = state.count + 1
        },
        decrement: (state) => {
           return { ...state, count: state.count -= 1 }  // state.count = state.count - 1
        }
    }
})

export const { increment, decrement } = counter.actions; 
export default counter.reducer;