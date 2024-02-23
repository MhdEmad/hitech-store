import React from 'react'
import './Shop.css'
import { Items } from '../../Items'
import Product from './Product'
import logo from './logo1.png'

const Shop = () => {
  return (
    <div className='shop'>
        <div className="title">
            <h1><img src={logo} alt="/" /> HiTech Store</h1>
        </div>
        <div className="pitems">
            {Items.map((item) => 
                <Product data={item} />
            )}
        </div>
    </div>
  )
}

export default Shop