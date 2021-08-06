import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../cart/Cart'

export default configureStore({
  reducer: {
      cart: CartReducer,
  }
})