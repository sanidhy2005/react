import { configureStore } from '@reduxjs/toolkit'
import ProducerReducer from '../Reducers/ProducerReducer'

export const store = configureStore({
  reducer: {
    product:ProducerReducer
  },
})