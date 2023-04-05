import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Badge } from "react-bootstrap";
import React, { useEffect } from "react";
import axios from "axios";

interface IModale {
  name: string;
  show: boolean;
  onHide: () => void;
}

interface IDrinkModal {
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1? : string;
    strIngredient2? : string;
    strIngredient3? : string;
    strIngredient4? : string;
    strIngredient5? : string;
    strIngredient6? : string;
    strInstructionsIT?: string;
    strGlass: string;
}


function Modale(props: IModale) {
    const nome = props.name.replace(/ /g, "_").toLowerCase();
    const [drinkModal, setDrinkModal] = React.useState<IDrinkModal>({strDrink: "", strDrinkThumb: "", strGlass: ""});

    useEffect(() => {
        if (nome)
        axios 
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+nome)
        .then((res) => {setDrinkModal({strDrink: res.data.drinks[0].strDrink, 
            strDrinkThumb: res.data.drinks[0].strDrinkThumb, 
            strIngredient1: res.data.drinks[0].strIngredient1, 
            strIngredient2: res.data.drinks[0].strIngredient2, 
            strIngredient3: res.data.drinks[0].strIngredient3, 
            strIngredient4: res.data.drinks[0].strIngredient4, 
            strIngredient5: res.data.drinks[0].strIngredient5, 
            strIngredient6: res.data.drinks[0].strIngredient6, 
            strInstructionsIT: res.data.drinks[0].strInstructionsIT, 
            strGlass: res.data.drinks[0].strGlass})
        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <img width={"40%"} src={drinkModal.strDrinkThumb}></img>
        </Modal.Body>
        <div className="d-flex flex-row justify-content-center">
        <Badge className="m-1" bg="info">{drinkModal.strIngredient1}</Badge>
          <Badge className="m-1" bg="info">{drinkModal.strIngredient2}</Badge>
          <Badge className="m-1" bg="info">{drinkModal.strIngredient3}</Badge>
          <Badge className="m-1" bg="info">{drinkModal.strIngredient4}</Badge>
          <Badge className="m-1" bg="info">{drinkModal.strIngredient5}</Badge>
          <Badge className="m-1" bg="info">{drinkModal.strIngredient6}</Badge>
          <Badge className="m-1" bg="primary">{drinkModal.strGlass}</Badge>
        </div>
        <p className="container-fluid text-center">{drinkModal.strInstructionsIT}</p>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;
