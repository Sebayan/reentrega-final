import React from 'react';
import { UseCartContext } from '../../Context/CartContext'; 
import './CartWidget.css'

const CartItem = ({ product }) => {
    const  {removeCart}  = UseCartContext();
    return (
        <div className='entorno'>
            <img className='tamaño' src={product.img} alt={product.nombre} />
                <p>Título: {product.nombre}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio u.: {product.price}</p>
                <p>Subtotal: ${product.cantidad * product.price}</p>
                <button onClick={() => removeCart(product.id)}><h4>Eliminar</h4></button>
                
        </div>
    )
}

export default CartItem;