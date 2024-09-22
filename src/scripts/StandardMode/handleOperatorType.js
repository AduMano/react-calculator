// Scripts
import getResult from "../handleResult";

const handleOperatorType = (value, getState, setState) => {
  const { num1, num2, operator } = getState;
  const { handleNum1, handleNum2, handleOperator } = setState;

  // Guard Clause
  if (num1 == "Error") return;

  // If theres no operator, update the operator state and shift the main operatort to sub
  if (operator == "") {
    handleOperator(value);
    handleNum2(num1);
    handleNum1("0");
  }
  // Else if theres already an operator, check if first operator has value, if not
  // then just change the operator, but if there is, perform a calculation
  else {
    if (num1 == "0") {
      handleOperator(value);
      return;
    }

    handleNum1(getResult(operator, num2, num1));
    handleNum2("");
    handleOperator("");
  }
};

export default handleOperatorType;
