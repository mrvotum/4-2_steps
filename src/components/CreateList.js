import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

export default function CreateList(props) {
  const handleDelete = id => props.onDelete(id);
  return (
    <div className="table">
      <div className="title">
        <span>Дата</span>
        <span>Пройдено км</span>
        <span>Действие</span>
      </div>
      {props.walks.map(walk => (
          <Row
            handleDelete={handleDelete}
            key={walk.id}
            id={walk.id}
            walk={walk}
          />
        ))}
    </div>
  );
}

CreateList.propTypes = {
  walk: PropTypes.shape({
    id: PropTypes.string,
    distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    date: PropTypes.string,
  }),
};
