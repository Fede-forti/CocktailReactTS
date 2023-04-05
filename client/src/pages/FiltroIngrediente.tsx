import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import CardDrink from '../components/CardDrink';

export interface IDrink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}



const FiltroIngrediente = () => {

  const [selected, setSelected] = useState<string>();
  const [categories, setCategories] = useState<string[]>([]);
  const [ingrediente, setIngrediente] = useState<any>([]);

      useEffect(() => {
          axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
          .then((res) => {
            setCategories(res.data.drinks.map((drink: any) => drink.strIngredient1))})
            .catch((err) => console.log(err));       

      }, []);

      useEffect(() => {
        axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+selected)
        .then((res) => {setIngrediente(res.data.drinks)})
        .catch((err) => console.log(err));
      }, [selected]);



  function creaSelect() {
    return categories.map((ingredient) => {
      return <option key={ingredient} value={ingredient} >{ingredient}</option>;
    });
  };


  return (
    <>
    <div className='d-flex flex-wrap flex-column align-items-center'>
      <h1>Filtra Ingrediente</h1>
      <select value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>{creaSelect()}</select>
    </div>
      <div className="d-flex flex-wrap justify-content-evenly"   >
      {ingrediente && ingrediente.map((drink: IDrink) => { return <CardDrink key={drink.idDrink} drink={drink}/> })}
      </div>
    </>
  )
}

export default FiltroIngrediente