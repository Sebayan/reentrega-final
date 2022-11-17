import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";
import CartItem from "../CartWidget/CartItem";


const Cart = () => {
    const {cart, total,totalProd} = UseCartContext();
    if (cart.length === 0) {
        return (
            <>
                <h5>No dispone de articulos seleccionados, por favor hacer click en "Hacer Compras" </h5>
                <Link to='/'><button >Hacer Compras</button></Link>
            </>
        )
    }
    return (
        <div>
            <>
            {cart.map((product) => (<CartItem key={product.id} product={product} />))}
            <div className="product"><p>cantidad de productos: {totalProd()} </p>
            <p>total: $ {total()}</p></div>
            <Link to="/checkout"><button ><h4>Emitir Comprobante</h4> </button></Link>
            </>
        </div>
    );
};

export default Cart;