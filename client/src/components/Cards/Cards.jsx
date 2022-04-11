import React from 'react';

import Card from '../Card/Card';

import css from './Cards.module.css';

export default function Cards({ countries, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ul className={css.container}>
        {countries.length > 0 &&
          countries.map((countryCard, idx) => (
            <Card
              key={idx}
              idx={idx}
              img={countryCard.flag}
              id={countryCard.id}
              name={countryCard.name}
              continent={countryCard.continent}
            />
          ))}
      </ul>
    </div>
  );
}
