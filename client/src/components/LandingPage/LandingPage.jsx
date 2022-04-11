import React from 'react';
import { Link } from 'react-router-dom';

import css from './LandingPage.module.css';

export default function LandingPage() {
  return (
    
    <div className={css.container}>
      
      <h1 className={css['container__title']}>Bienvenido a la aplicacion de paises</h1>
      <Link to="/countries">
        <button className={css['container__button']}>Ingresar</button>
      </Link>

      
    </div>
  );
}
