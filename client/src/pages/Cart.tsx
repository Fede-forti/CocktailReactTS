import React, { useEffect } from "react";
import useStore from "../modules/UseStore";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartCard from '../components/CartCard';


interface IPropsCart {
    show: boolean;
    onHide: () => void;
}




const Cart = (props: IPropsCart) => {
  const cart = useStore((state) => state.cart);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
      let tot = 0;
      cart.forEach((drink) => {
          tot += drink.price * drink.quantity;
      });
      setTotal(tot);
  }, [cart]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Carrello
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.map((drink, index) => ( 
            <CartCard key={index} drink={drink} index={index}/>
        ))}
        <div className="d-flex flex-column align-items-end">
            <hr />
        <h5><strong>TOTALE</strong></h5><br/>
        <h6>{total.toFixed(2)}€</h6>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default Cart;
