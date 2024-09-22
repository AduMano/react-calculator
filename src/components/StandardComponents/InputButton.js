import React from "react";

export default function InputButton({ props }) {
  const { className, btnType, onClick, value } = props;

  return (
    <button className={className} btn-type={btnType} onClick={onClick}>
      {value}
    </button>
  );
}
