import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getActivities, filterByActivity } from '../../actions';

import css from '../Home/Home.module.css';

export default function FilterForActivities() {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
    /* eslint-disable */
  }, []);

  const handleFilterByActivity = (act) => {
    dispatch(filterByActivity(act));
  };

  return (
    <div className={css['aside-boxes']}>
      <label htmlFor="forActivities">Activities: </label>
      <select
        defaultValue={''}
        name="activity"
        id="forActivities"
        onChange={(e) => handleFilterByActivity(e.target.value)}
      >
        <option disabled="disabled"></option>
        {allActivities.length > 0 &&
          allActivities.map((activity) => (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          ))}
      </select>
    </div>
  );
}
