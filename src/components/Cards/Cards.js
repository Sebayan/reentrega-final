import  Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import './Cards.css';

function Cards( {info} ) {
  return (

      <div >
      <Card.Body className="img" >
      <Card.Img variant="top" src={info.img} className="Card"/>
        <Card.Title><h3>{info.tittle}</h3></Card.Title>        
        <div>
        <Link to= {`/Detail/${info.id}`}> Ver más </Link>
        </div>

      </Card.Body>
      </div>
  );
}

export default Cards;