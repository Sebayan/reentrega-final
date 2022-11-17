import "./NavBar.css"
import Cart from '../CartWidget/CartWidget.js';
import { Link } from "react-router-dom";


const NavBar = () => (
    
    <div>
        <h1 className="Name"> Casa de videos</h1>
        
        <ul className="List">
            <li>
                <Link to={'/'}>Home</Link> 
            </li> 

            <li>
            <Link to={'/Games/Accion'}>Accion</Link>
            </li>

            <li> 
            <Link to={'/Games/Deporte'}>Deporte</Link>
            </li>

            <li> 
            <Link to={'Games/Pelea'}>Pelea</Link>
            </li>
            
            
            <li>
            <Link to={'/cart'}><Cart/></Link>
            </li>

        </ul>
        
    </div>

)


export default NavBar; 