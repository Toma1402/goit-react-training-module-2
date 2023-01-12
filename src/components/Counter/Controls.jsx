import React from 'react';
export const Controls = ({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Збільш. на 1</button>
    <button onClick={onDecrement}>Зменш. на 1</button>
  </div>
);
