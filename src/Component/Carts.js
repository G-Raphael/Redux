import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../cart/Cart'
export default function Carts() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch()

    return (
        <div>
            <p>{cartItems}</p>
            <button onClick={() => dispatch(increment())}>Add Items To Cart</button>
            <button onClick={() => dispatch(decrement())}>Remove Items To Cart</button>
        </div>
    )
}
