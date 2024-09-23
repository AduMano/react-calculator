import React, { useCallback } from "react";
import { NumberInput } from "../components/BasicComponents/NumberInput";
import { OperatorInput } from "../components/BasicComponents/OperatorInput";
import useBasicCalculator from "../CustomHooks/useBasicCalculator";

export const BasicMode = () => {
  const handleEvents = useBasicCalculator();

  const handleResult = useCallback(() => {
    handleEvents.handleResult();
  }, [handleEvents]);

  const calculate = useCallback(
    (event) => {
      event.preventDefault();
      handleResult();
    },
    [handleResult]
  );

  const handleOperand = useCallback(
    (setter) => (event) => {
      setter(event.target.value);
    },
    []
  );

  return (
    <div className="calcBasicMode">
      <form onSubmit={calculate}>
        <NumberInput
          label={"#1"}
          type={"number"}
          isReadOnly={false}
          value={handleEvents.num1}
          onChange={handleOperand(handleEvents.handleNum1)}
        />
        <NumberInput
          label={"#2"}
          type={"number"}
          value={handleEvents.num2}
          isReadOnly={false}
          onChange={handleOperand(handleEvents.handleNum2)}
        />

        <div className="formResult">
          <OperatorInput
            onChange={handleOperand(handleEvents.handleOperator)}
            stateOperator={handleEvents.operator}
          />
          <NumberInput
            label={"RESULT"}
            value={handleEvents.result}
            type={"text"}
            isReadOnly={true}
          />
        </div>

        <input className="submitBtn" type="submit" value="CALCULATE" />
      </form>
    </div>
  );
};
