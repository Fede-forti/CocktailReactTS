import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { IDrink } from '../pages/FiltroCategoria';
import Button from 'react-bootstrap/Button';
import Modale from './Modale';
import useStore from '../modules/UseStore';


interface IProps {
    drink: IDrink;
}


const CardDrink = (props: IProps) => {

    const randomPrice = ((Math.random() * 20) + 3).toFixed(2);

    const [modalShow, setModalShow] = React.useState(false);
    const cart = useStore((state) => state);
    const drink = {
        name: props.drink.strDrink,
        price: parseFloat(randomPrice),
        quantity: 1,
        image: props.drink.strDrinkThumb
    }

    return (
        <>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.drink.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{props.drink.strDrink}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Codice drink: {props.drink.idDrink}</ListGroup.Item>
            <ListGroup.Item>Prezzo: {randomPrice}€</ListGroup.Item>
          </ListGroup>
          <Card.Body className='d-flex flex-wrap justify-content-between'>
            <Button variant="outline-info"  onClick={() => setModalShow(true)}>Dettagli</Button>
            <Button variant="outline-primary" onClick={() => cart.add(drink)}>Ordina al tavolo</Button>{' '}
          </Card.Body>
        </Card>
        {props.drink.strDrink && <Modale name={props.drink.strDrink} show={modalShow} onHide={() => setModalShow(false)}/>}
        </>
      );
}

export default CardDrink;