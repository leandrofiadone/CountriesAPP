import React from 'react';

import css from './CardActivities.module.css';

export default function CardActivities({ name, difficulty, duration, season }) {
  return (
    <div className={css.container}>
      <h3>Name: {name}</h3>
      <h3>Difficulty: {difficulty}</h3>
      <h3>Duration: {duration} min.</h3>
      <h3>Season: {season}</h3>
    </div>
  );
}
