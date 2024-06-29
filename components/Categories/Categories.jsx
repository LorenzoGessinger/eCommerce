import { FavoriteBorder, KeyboardArrowDown, ShoppingCart } from '@mui/icons-material'
import './categories.modules.css'
import { useState } from 'react'
import Cart from '../Cart/Cart'

export const Categories = ({ logo, categories, money }) => {

    const [open, setOpen] = useState(false)

    return (
        <section id='categories-container'>
            <div className='logo'>
                <h1>
                    {logo}
                </h1>
            </div>

            <div className='separate-items'>
                <div className='categories'>
                    <div>
                        <span>{categories}</span>
                        <KeyboardArrowDown />
                    </div>
                </div>

                <div className='cart-icons'>
                    <div>
                        <FavoriteBorder />
                    </div>
                    <div className='shopping-cart' onClick={() => setOpen(!open)}>
                        <ShoppingCart />
                        <span className='shopping-counter'>0</span>
                    </div>
                    <span>{money}</span>
                </div>
            </div>
            {open && <Cart />}
        </section>
    )
}

export default Categories
