import React, { useContext } from 'react'
import './Cart.css'
import { Items } from '../../Items'
import {ShopContext} from '../../Context/Context'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const { cartItems, cartAmount } = useContext(ShopContext)
    const navigate = useNavigate()
    const totalAmount = cartAmount()

    return (
        <div className='cart'>
            <div>
                <h1>Items you picked</h1>
            </div>
            <div className='cart'>
                {Items.map((items) => {
                    if (cartItems[items.id] !== 0){
                        return <CartItem data={items} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="out">
                    <p> Subtotal: $ {totalAmount} </p>
                    <button onClick={() => navigate('/')}>Keep Shopping</button>
                    <button>Checkout</button>
                </div>
            ) : (
                <h1> Your Cart is Empty</h1>
            )}
        </div>
    )
}

export default Cart