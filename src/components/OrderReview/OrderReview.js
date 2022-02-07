import React from 'react';
import useProducts from '../../hooks/usProduct';


const OrderReview = () => {
   const [product] = useProducts();
    return (
        <div>
            <h2>{product.length}</h2>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;