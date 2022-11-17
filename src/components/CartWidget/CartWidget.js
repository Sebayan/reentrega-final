
import Carrito from './cart.jpg'
import './CartWidget.css'


const CartWidget = () => {
    return(
        <div className="carrito">       
    <img src={Carrito} alt="carrito" />
            </div>
    )
};

export default CartWidget