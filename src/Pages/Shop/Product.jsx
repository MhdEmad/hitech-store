import React, { useContext } from 'react'
import {ShopContext} from '../../Context/Context'

const Product = (props) => {
    const {id, itemName, price, itemImage} = props.data
    const {addToCart, cartItems} = useContext(ShopContext)
    const amount = cartItems[id]
    return (
        <div className='product'>
            <img src={itemImage} alt="" />
            <div className="descripe">
                <p><b>{itemName}</b></p>
                <p>${price}</p>
            </div>
            <button className='add' onClick={()=> addToCart(id)}>
                Add To Cart {amount > 0 && <>({amount})</>}
            </button>
        </div>
    )
}

export default Product