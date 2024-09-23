import React from "react";

export const OperatorInput = ({ onChange, stateOperator }) => {
  const select = (event) => onChange(event);

  return (
    <select onChange={select} value={stateOperator}>
      <option defaultValue>+</option>
      <option>-</option>
      <option>*</option>
      <option>/</option>
    </select>
  );
};
