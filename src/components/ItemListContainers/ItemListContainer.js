import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
// import Producto from "./List";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../index";

const ItemListContainer = () => {
const [data, setData] = useState([]);
const { categoriaId } = useParams();

useEffect(() => {
    const coleccionProductos =
    categoriaId ? query(collection(db, "Items"), where("category", "==", categoriaId))    
    : collection(db, "Items");
getDocs(coleccionProductos)
    .then((result) => {
    const lista = result.docs.map((producto) => {
        return {
            id: producto.id,
            ...producto.data(),
        };
        });
        setData(lista);
    })
    .catch((error) => console.log(error));
}, [categoriaId]);

return (
    <div>
    <ItemList data={data} />
    </div>
);
};

export default ItemListContainer;
