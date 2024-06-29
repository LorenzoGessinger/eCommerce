import React, { useState } from 'react'
import './addedcartitems.modules.css'
import products from "../../database/db.json"
import { DeleteOutline, DeleteSweep } from '@mui/icons-material'
import CheckoutTotal from '../CheckoutTotal/CheckoutTotal'

const AddedCartItems = () => {

    return (
        <section id='cart-items_container'>

            <table className='cart-items_table'>
                <thead className='cart-items_table-head'>
                    <tr className='cart-items_table-row'>
                        <th className='cart-items_table-data'>IMAGE</th>
                        <th className='cart-items_table-data'>PRODUCT</th>
                        <th className='cart-items_table-data'>PRICE</th>
                        <th className='cart-items_table-data'>QUANTITY</th>
                        <th className='cart-items_table-data'>TOTAL</th>
                        <th className='cart-items_table-data'>
                            <DeleteOutline className='delete_button'/>
                        </th>
                    </tr>
                </thead>
                <tbody className='cart-items-table_body'>
                    {products.map((product) => (
                        <tr key={product.id} className='cart-items-table_box'>
                            <td className='cart-items-table_box_data'>
                                <img src={product.imageIndex} className='cart-items_table-image' />
                            </td>
                            <td className='cart-items-table_box_data'>{product.name}
                            </td>
                            <td className='cart-items-table_box_data orange-text'>
                                ${product.price}.99
                            </td>
                            <td className='cart-items-table_box_data btn_border'>
                                
                                <button
                                    className='cart-items-btn_counter'
                                >
                                    -
                                </button>
                                <span className='for-btn_counter'>1</span>
                                <button
                                    className='cart-items-btn_counter'
                                >
                                    +
                                </button>
                            </td>
                            <td className='cart-items-table_box_data orange-text'>
                                {product.price}
                            </td>
                            <td className='cart-items-table_box_data'>
                                <DeleteOutline className='delete_button' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <CheckoutTotal />
            </div>
        </section>
    )
}

export default AddedCartItems