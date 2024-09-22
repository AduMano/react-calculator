import React, { useState } from "react";

// Components
import InputKeys from "../components/StandardComponents/InputKeys";

export const StandardMode = () => {
  // States
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");

  // Handle
  const handleNum1 = (value) => {
    setNum1(value);
  };
  const handleNum2 = (value) => {
    setNum2(value);
  };
  const handleOperator = (value) => {
    setOperator(value);
  };

  return (
    <div className="calcStandardMode">
      <div className="outputScreen">
        <h3 className="subScreen">
          {num2} {operator}
        </h3>
        <h1 className="mainScreen">{num1}</h1>
      </div>

      <div className="inputSection">
        <InputKeys
          handleState={{ handleNum1, handleNum2, handleOperator }}
          getState={{ num1, num2, operator }}
        />
      </div>
    </div>
  );
};
