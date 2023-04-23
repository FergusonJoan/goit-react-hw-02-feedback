import React from 'react';

export const FeedbackOptions = ({ click }) => {
  return (
    <>
      <button name="good" onClick={click}>
        Good
      </button>
      <button name="neutral" onClick={click}>
        Neuthral
      </button>
      <button name="bad" onClick={click}>
        Bad
      </button>
    </>
  );
};
