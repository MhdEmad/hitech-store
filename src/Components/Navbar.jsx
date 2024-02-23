import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='link'>
            <Link to='/'>Shop</Link>
            <Link to='/cart'>
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
  )
}

export default Navbar