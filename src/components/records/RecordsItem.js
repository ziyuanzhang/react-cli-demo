import React from 'react';
import PropTypes from 'prop-types';

const RecordsItem = props => {

  let timestamp = new Date(props.record.date).toLocaleString();

  return (
    <li className="list-item">
      <div>{timestamp}</div>
      <div>{props.record.title}</div>
      <div>{props.record.amount}</div>
    </li>
  );
};
export default RecordsItem;
/* 
RecordsItem.propTypes={
  id:PropTypes.number,
  date:PropTypes.number,
  title:PropTypes.string,
  amount:PropTypes.string
} */
