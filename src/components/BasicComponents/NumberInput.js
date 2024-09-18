import React from "react";

export const NumberInput = ({ label, type, isReadOnly }) => {
  return (
    <div className="formGroup">
      <label>{label}</label>
      <input type={type} readOnly={isReadOnly} />
    </div>
  );
};
