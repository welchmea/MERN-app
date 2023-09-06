import React from 'react';
import ProductRow from '../components/ProductRow.js';
import {BiPurchaseTag} from 'react-icons/bi'; 

function OrderPage({items}) {
    return (
        <>
        <h2>Order Form<BiPurchaseTag/></h2>
        <article>
                <h3>Choose the quantity for each product choice.</h3>
                <p></p>
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
            </article> 
            </>
    );
};
export default OrderPage;