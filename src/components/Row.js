import React from 'react';
import PropTypes from 'prop-types';

export default function Row({ walk, handleDelete }) {
  const onDelete = () => handleDelete(walk.id);
  return (
    <div className="row">
      <span>{walk.date}</span>
      <span>{walk.distance}</span>
      <span className="deleteBtn" onClick={onDelete}>Удалить</span>
    </div>
  );
}

Row.propTypes = {
  walk: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  handleDelete: PropTypes.func,
};
