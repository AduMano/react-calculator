import React from "react";

export const NumberInput = ({
  label,
  type,
  isReadOnly,
  handleInput,
  value,
}) => {
  const keyPress = (event) => handleInput(event);

  return (
    <div className="formGroup">
      <label>{label}</label>
      <input
        type={type}
        readOnly={isReadOnly}
        value={value}
        onChange={keyPress}
      />
    </div>
  );
};
