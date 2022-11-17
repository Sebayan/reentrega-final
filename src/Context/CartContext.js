import React, { useContext, useState } from "react";
const CartContext = React.createContext([]);
export const UseCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addProduct = (item, cantidad) => {
        if (inCart(item.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === item.id
                        ? { ...product, cantidad: product.cantidad + cantidad }
                        : product;
                })
            );
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const total = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);
    };

    const totalProd = () =>
        cart.reduce(
            (acumulador, prodActual) => acumulador + prodActual.cantidad,
            0
        );

    const cleanCart = () => setCart([]);

    const inCart = (id) =>
        cart.find((product) => product.id === id) ? true : false;

    const removeCart = (id) =>
        setCart(cart.filter((product) => product.id !== id));

    return (
        <CartContext.Provider
            value={{
                cleanCart,
                inCart,
                removeCart,
                addProduct,
                total,
                totalProd,
                cart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
