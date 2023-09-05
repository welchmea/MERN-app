import React, { useState } from 'react';
import { VscAdd, VscChromeMinimize} from 'react-icons/vsc';

function ProductQuantity () {
    const [quantity, setQuantity] = useState(0);
    const plus =  () => setQuantity(quantity === 10 ? quantity: quantity + 1);
    const minus =  () => setQuantity(quantity === 0 ? quantity: quantity - 1);
    return (
        <>
        <VscChromeMinimize onClick={minus} />
        <span>&nbsp;{quantity}&nbsp;</span>
        <VscAdd onClick={plus} />
    </>
    )
};
export default ProductQuantity;