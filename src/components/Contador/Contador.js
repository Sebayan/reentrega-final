import { useEffect, useState } from 'react';
import './Contador.css'


const Contador = ({initial , stock, onAdd}) => {
  const [Contador, setContador] = useState(initial);

  const Sumar = () => {
    setContador(Contador + 1);   
  };
  const Restar = () =>{
    setContador(Contador - 1)

  } 

  useEffect(() =>{
    setContador(parseInt(initial));
  },[initial])

  return (

    <div className='Count'>
    <button disabled={Contador <= 1} onClick={Restar}> - </button>
  <span>   {Contador}   </span>
    <button disabled={Contador >= stock} onClick={Sumar} > + </button>  
    <div>
    <button disabled={stock <= 0} onClick={() => onAdd(Contador)} >Agregar al carrito</button>
    </div>

    </div>
  );
};

export default Contador;
