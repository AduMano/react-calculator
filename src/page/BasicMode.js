import React from "react";
import { NumberInput } from "../components/BasicComponents/NumberInput";
import { OperatorInput } from "../components/BasicComponents/OperatorInput";

export const BasicMode = ({ handleEvents, states }) => {
  // Logic
  const calculate = (event) => {
    event.preventDefault();
    handleResult();
  };

  const handleOperandOne = (event) =>
    handleEvents.handleNum1(event.target.value);
  const handleOperandTwo = (event) =>
    handleEvents.handleNum2(event.target.value);
  const handleOperator = (event) =>
    handleEvents.handleOperator(event.target.value);
  const handleResult = () => handleEvents.handleResult();

  return (
    <div className="calcBasicMode">
      <form onSubmit={calculate}>
        <NumberInput
          label={"#1"}
          type={"number"}
          isReadOnly={false}
          value={states.num1}
          handleInput={handleOperandOne}
        />
        <NumberInput
          label={"#2"}
          type={"number"}
          value={states.num2}
          isReadOnly={false}
          handleInput={handleOperandTwo}
        />

        <div className="formResult">
          <OperatorInput
            handleInput={handleOperator}
            stateOperator={states.operator}
          />
          <NumberInput
            label={"RESULT"}
            value={states.result}
            type={"text"}
            isReadOnly={true}
          />
        </div>

        <input className="submitBtn" type="submit" value="CALCULATE" />
      </form>
    </div>
  );
};
