import React from 'react';
import ProductQuantity from './ProductQuantity'; 

function ProductRow ({row}) {
    return (
      <tr>
        <td>
        {row.product} 
        </td>
        <td>
          {row.company}
        </td>
        <td>
          {row.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}
        </td>
        <td>
          <ProductQuantity />
        </td>
      </tr>

    )
};

export default ProductRow;
