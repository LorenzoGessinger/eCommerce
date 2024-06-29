import React from 'react'
import './checkouttotal.modules.css'
import products from '../../database/db.json'

export const CheckoutTotal = () => {
    return (
        <section id='checkoutTotal-section_container'>
            <div>
                <button className='checkoutTotal-continue_btn'>
                    CONTINUE SHOPPING
                </button>
                <button className='checkoutTotal-reset_btn'>
                    RESET CART
                </button>

                <div className='checkoutTotal-discount_apply'>
                    <p className='discount'>DISCOUNT CODES</p>
                    <div className='discount-border'>
                        <input className='input_discount' placeholder='Enter your codes . . .' />
                        <button className='apply_btn'>APPLY</button>
                    </div>
                </div>
            </div>
            <div className='checkoutTotal-continue_totals'>
                <div className='checkoutTotal_border'>
                    <div className='checkoutTotal-continue_aligned-totals'>
                        <p className='checkoutTotal-subtotal'>Subtotal</p>
                        <span className='checkoutTotal-total_price'>$240,00</span>
                    </div>

                    <div className='checkoutTotal-continue_aligned-totals'>
                        <p className='checkoutTotal-total'>TOTAL</p>
                        <span className='checkoutTotal-subtotal_price'>$240,00</span>
                    </div>
                </div>
                <div>
                    <button className='checkoutTotal-proceed_btn'>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </section>
    )
}

export default CheckoutTotal