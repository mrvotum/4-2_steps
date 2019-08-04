import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Input({ onEnter }) {
  const [input, setInput] = useState({
    date: '',
    distance: '',
  });

  const onAdd = (value, e) => {
    setInput({
      ...input,
      [value]: e.target.value,
    });
  };

  const onOK = e => {
    e.preventDefault();
    onEnter(input);
    setInput({ date: '', distance: '' });
  };

  return (
    <form>
      <label className="label" htmlFor="dateInput">Дата (ДД.ММ.ГГ): </label>
      <input className="input"  id="dateInput" onChange={e => onAdd('date', e)} value={input.date} />

      <label className="label" htmlFor="distanceInput">Пройдено км: </label>
      <input className="input" id="distanceInput" onChange={e => onAdd('distance', e)} value={input.distance} />
      
      <button className="btn" type="submit" onClick={onOK}>ОК</button>
    </form>
  );
}

Input.propTypes = {
  onEnter: PropTypes.func,
};
