import React from 'react';

import css from './CardById.module.css';

export default function CardById(props) {
  const { name, img, continent, id, capital, subregion, area } = props;

  return (
    <div className={css['container-CountryDetail']}>
      <div className={css['img-container']}>
        <img
          alt="flag from country"
          width="350px"
          heigth="200px"
          src={img}
        ></img>
      </div>
      <div className={css['container-countryDetail__details']}>

        <h2>Name:</h2>
        <h1>{name}</h1>
        
        <h2>Continent: {continent}</h2>
        
        <h2>Id: {id}</h2>

        <h2>Capital: {capital}</h2>
        
        <h2>Subregion: {subregion}</h2>
        
        <h2>Area of the country:</h2>
        <h3>
          {area} Million {'\u33A2'}
        </h3>
      </div>
    </div>
  );
}
