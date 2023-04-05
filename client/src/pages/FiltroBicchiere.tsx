import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import CardDrink from '../components/CardDrink';

export interface IDrink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}



const FiltroBicchiere = () => {

  const [selected, setSelected] = useState<string>();
  const [categories, setCategories] = useState<string[]>([]);
  const [bicchiere, setBicchiere] = useState<any>([]);

      useEffect(() => {
          axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
          .then((res) => {
            setCategories(res.data.drinks.map((drink: any) => drink.strGlass))})
            .catch((err) => console.log(err));       

      }, []);

      useEffect(() => {
        axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g="+selected)
        .then((res) => {setBicchiere(res.data.drinks)})
        .catch((err) => console.log(err));
      }, [selected]);



  function creaSelect() {
    return categories.map((glass) => {
      return <option key={glass} value={glass} >{glass}</option>;
    });
  };


  return (
    <>
    <div className='d-flex flex-wrap flex-column align-items-center'>
      <h1>Filtra Bicchiere</h1>
      <select value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>{creaSelect()}</select>
    </div>
      <div className="d-flex flex-wrap justify-content-evenly"   >
      {bicchiere && bicchiere.map((drink: IDrink) => { return <CardDrink key={drink.idDrink} drink={drink}/> })}
      </div>
    </>
  )
}

export default FiltroBicchiere