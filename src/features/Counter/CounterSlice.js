import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  nayeem:true,
}

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    

    incrementByAmount: (state, action) => {

      state.nayeem = action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer