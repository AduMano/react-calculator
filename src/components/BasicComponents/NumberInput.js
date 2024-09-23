import React from "react";

export const NumberInput = ({ label, type, isReadOnly, onChange, value }) => {
  const keyPress = (event) => onChange(event);
  const handleSelection = (e) => {
    if (e.target.value.trim() == "0") e.target.select();
  };

  return (
    <div className="formGroup">
      <label>{label}</label>
      <input
        type={type}
        readOnly={isReadOnly}
        value={value}
        onChange={keyPress}
        onFocus={handleSelection}
      />
    </div>
  );
};
