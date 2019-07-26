import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles.module.css';

const Publication = ({ title, text }) => (
  <article className={css.publication}>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Publication;
