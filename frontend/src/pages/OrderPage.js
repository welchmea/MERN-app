import React from 'react';
import ProductRow from '../components/ProductRow.js'; 
import { useBackgroundImage } from '../components/useBackgroundImage.js';

function OrderPage({items}) {
    useBackgroundImage('images/chirayu-trivedi-Bogur-lSk3w-unsplash.jpg')
    return (
        <>
        <div className='body-text-in-main'>
        <h2>Order Form</h2>
        <article >
                <h3>Choose the quantity for each product choice.</h3>
                <div className='center-table-div'>
                    <table id="orderform">
                            <caption><p>Available products:</p></caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>             
                                </tr>
                            </thead>
                            <tbody>
                            {items.map((item, index) => <ProductRow row={item} key={index} />)}
                            </tbody>
                        </table>
                        </div>
            </article> 
            </div>
            </>
    );
};
export default OrderPage;