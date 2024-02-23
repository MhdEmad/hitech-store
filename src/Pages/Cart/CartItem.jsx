import React, {useContext} from 'react'
import {ShopContext} from '../../Context/Context'

const CartItem = (props) => {
    const {id, itemName, price, itemImage} = props.data
    const { cartItems, addToCart, removeFromCart, updateCart } = useContext(ShopContext)
    return (
        <div className='citem'>
            <img src={itemImage} alt="" />
            <div className="des">
                <p><b>{itemName}</b></p>
                <p>${price}</p>
                <div className="counthandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCart(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem