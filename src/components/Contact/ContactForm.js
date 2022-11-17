import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../index";
import { useState } from "react";
import { UseCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./form.css"

const defaultForm = { name: "", email: "", message: "" };

const ContactForm = () => {
const [form, setForm] = useState(defaultForm);
const [id, setId] = useState('');
const{cart,total,cleanCart}= UseCartContext()

const changeHandler = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
};

const submitHandler = (ev) => {
    ev.preventDefault();
    const ordersCollection = collection(db, "ordenes");
    addDoc(ordersCollection,{
        form,
        items: cart,
        total: total(),
        date: serverTimestamp()
    }).then((snapshot) => {
    setId(snapshot.id);
    cleanCart()
    });
};

return (
    <div>
    {id ? (
        <div>
    Muchas gracias por su compra, su id de compra es: {id}
        
        </div>
    ) : (
        <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="name" className="letter">Nombre</label>
            <input
            name="name"
            id="name"
            value={form.name}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="email" className="letter">Email</label>
            <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={changeHandler}
            />
        </div>
        <div>
            <label htmlFor="message" className="letter">Ingrese su metodo de pago</label>
            <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={changeHandler}
            ></textarea>
        </div>
        <button><h4>Enviar</h4></button>
        <Link to="/"><button><h4>Volver al inicio</h4></button></Link>
        </form>
        
    )}
    </div>
    
)};


export default ContactForm;

