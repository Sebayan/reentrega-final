import "./App.css";
import ItemListContainer from "./components/ItemListContainers/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainers/ItemDetailContainer";
import Cart from "./components/Cart/cart";
import CartProvider from "../src/Context/CartContext";
import CheckOut from "./components/Check/Chekout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Games/:categoriaId" element={<ItemListContainer />} />
            <Route path="/Detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
