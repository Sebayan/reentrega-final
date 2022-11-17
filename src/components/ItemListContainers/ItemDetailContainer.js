import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
// import Producto from "./List";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../index";

const ItemDetailContainer =() => {
const [item, setItem] =useState({})
const {id}= useParams()
useEffect(()=>{  
  const coleccionProd = collection(db, "Items")
  const referenciaDoc = doc(coleccionProd, id)
  getDoc(referenciaDoc)
  .then((result)=>{
    setItem({
      id:result.id,
      ...result.data()
    })
  })
  .catch((error)=> console.log(error))
}, [id])

return( <div className="text"> <ItemDetail item={item}/> <p>Id: {id}</p> <p>Precio producto: ${item.price}</p> </div>
)

}

export default ItemDetailContainer;


