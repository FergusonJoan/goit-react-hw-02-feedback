import React from 'react';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2
        style={{
          margin: '15px 0',
        }}
      >
        {title}
      </h2>
      {children}
    </>
  );
};
