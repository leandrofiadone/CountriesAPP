import React from 'react';
import { Link } from 'react-router-dom';

import css from './Card.module.css';

export default function Card({ id, img, name, continent }) {
  return (
    <div className={css['container-cards']}>
      <li key={id}>
        <Link to={`/countries/${id}`}>
          <img
            className={css['container-cards__img']}
            alt="flag from country"
            src={img}
          ></img>
        </Link>
        <h2 className={css.nameAndContinent}>{name}</h2>
        <h2 className={css.nameAndContinent}>{continent}</h2>
      </li>
    </div>
  );
}
