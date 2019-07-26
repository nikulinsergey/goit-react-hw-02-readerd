import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles.module.css';

const Counter = ({ number, total }) => (
  <p className={css.counter}>
    {number}/{total}
  </p>
);
Counter.propTypes = {
  number: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
export default Counter;
