import React from 'react'
import { Link } from 'react-router-dom';
import "./cartItemCart.css";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className='cartItemCard'>
        <img src={item.image} alt="img" />
        <div>
            <Link to={`/product/${item.product}`}>
                {item.name}
            </Link>
            <span>{`Precio: $${item.price}`}</span>
            <p onClick={() => deleteCartItems(item.product)}>Eliminar</p>
        </div>
    </div>
  )
}

export default CartItemCard