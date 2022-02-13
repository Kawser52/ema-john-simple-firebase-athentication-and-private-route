import React from 'react';
import useProducts from '../../hooks/usProduct';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart'
import RivewItem from './RivewItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';


const OrderReview = () => {
   const [product, setProduct] = useProducts();
   const [cart,setCart] = useCart(product);
   const nagigate= useNavigate();
   const handleRemove = (key) =>{
       const newCart = cart.filter(product =>product.key !==key);
       setCart(newCart);
       deleteFromDb(key);
   }
   const handleClick=()=>{
        nagigate('/order')
        setCart([]);
        clearTheCart();
   }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product =><RivewItem 
                        key = {product.key}
                        product={product}
                        handleRemove={handleRemove}></RivewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                    <button onClick={handleClick} className='btn-regular'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;