import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getSearch } from '../../actions';

import css from './SearchBar.module.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  function handleOnChange(name) {
    setText(name);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(getSearch(text));
    setText('');
  }
  return (
    <form className={css.main} onSubmit={(e) => handleOnSubmit(e)}>
      <div className={css.left}>
        <label htmlFor="title">Countries App</label>
      </div>
      <div className={css.center}>
        <div className={css['center-input-btn']}>
          <input
            className={css.input}
            onChange={(e) => handleOnChange(e.target.value)}
            type="text"
            id="title"
            placeholder="Search a country by name..."
            value={text}
          />
          <button className={css.btn} type="submit" path="/activity">
            Search
          </button>
        </div>
      </div>
      <div className={css.right}>
        <Link to="/activity">Create Activiy</Link>
      </div>
    </form>
  );
}
