import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        add: (state) => {
            state.value += 1
        },
        sub: state => {
            state.value = -1
        }
        ,
        increment: (state, action) => {
            state.value += action.payload
        }

    }
})

export const { add, sub, increment } = counterSlice.actions

//  thunk action 

export const addAsync = amount => dispatch => {
    setTimeout(() => dispatch(add(amount)), 1000)
}

export const countState = state => state.count.value;
export default counterSlice.reducer