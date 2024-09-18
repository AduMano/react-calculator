import React from "react";

export const OperatorInput = ({ handleInput, stateOperator }) => {
  const select = (event) => handleInput(event);

  return (
    <select onChange={select} value={stateOperator}>
      <option selected>+</option>
      <option>-</option>
      <option>*</option>
      <option>/</option>
    </select>
  );
};
