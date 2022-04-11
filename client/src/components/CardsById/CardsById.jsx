import React from 'react';
import { Link } from 'react-router-dom';

import CardById from '../CardById/CardById';
import CardActivities from '../CardActivities/CardActivities';

import css from './CardsById.module.css';

export default function CardsById({ countries, loading, byParams }) {
  loading && <h2>Loading...</h2>; //! esto se puede mejorar?

  return (
    <div>
      {countries.length > 0 &&
        countries.map((countryId, idx) => (
          <div className={css.container} key={idx}>
            <div className={css['container-innerId']}>
              {byParams !== undefined && (
                <CardById
                  img={countryId.flag}
                  name={countryId.name}
                  continent={countryId.continent}
                  id={countryId.id}
                  capital={countryId.capital}
                  subregion={countryId.subregion}
                  area={countryId.area / 1000000}
                />
              )}
            </div>
            <div className={css['container-innerActivity']}>
              {countryId.activities && countryId.activities[0] ? (
                countryId.activities.map((activity) => (
                  <CardActivities
                    key={activity.name}
                    name={activity.name}
                    difficulty={activity.difficulty}
                    duration={activity.duration}
                    season={activity.season}
                  />
                ))
              ) : (
                <div className={css['btn-container']}>
                  <p className={css['btn-container']}>
                    * This country has not activities created
                  </p>
                  <Link className={css['btn-create']} to="/activity">
                    CREATE
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
