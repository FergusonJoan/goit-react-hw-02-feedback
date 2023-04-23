import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.list}>
      {options.map(option => {
        <button
          key={option}
          type="button"
          className={style.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>;
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
}.isRequired;
