import React, { useEffect } from "react";
import useStore, { ICartDrink } from "../modules/UseStore";
import ClearIcon from "@mui/icons-material/Clear";

interface IProps {
  drink: ICartDrink;
  index: number;
}

const CartCard = (props: IProps) => {
  const cart = useStore((state) => state);

  return (
    <>
      <div className="d-flex flex-row justify-content-evenly">
        <img
          src={props.drink.image}
          alt={props.drink.name}
          width="100px"
          height="100px"
        />
        <p>{props.drink.name}</p>
        <p>{props.drink.price}€</p>
        <p>{props.drink.quantity}</p>
          <ClearIcon onClick={() => cart.remove(props.index)} />
      </div>
      <hr />
    </>
  );
};

export default CartCard;
