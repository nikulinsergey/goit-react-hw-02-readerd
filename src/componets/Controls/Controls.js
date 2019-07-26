/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles.module.css';

const Controls = ({ onForward, onBack, disabledForward, disableBack }) => (
  <section className={css.controls}>
    <button
      disabled={disableBack}
      type="button"
      className={css.button}
      onClick={() => onBack()}
    >
      Назад
    </button>
    <button
      disabled={disabledForward}
      type="button"
      className={css.button}
      onClick={() => onForward()}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Controls;
