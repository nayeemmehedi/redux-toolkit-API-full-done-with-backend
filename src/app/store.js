import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/Counter/CounterSlice"

import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemon } from '../features/Pokemon'

export const store = configureStore({
  reducer: {
 
    [pokemon.reducerPath]: pokemon.reducer,
    counter: counterReducer,
  },

 
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemon.middleware),
})


setupListeners(store.dispatch)
