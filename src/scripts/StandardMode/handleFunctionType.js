// Scripts
import getResult from "../handleResult";

const handleFunctionType = (value, getState, setState) => {
  const { num1, num2, operator } = getState;
  const { handleNum1, handleNum2, handleOperator } = setState;

  switch (value) {
    case "C":
      handleNum1("0");
      handleNum2("");
      handleOperator("");
      break;
    case "←":
      // Guard Clause
      if (num1 == "Error") {
        handleNum1("0");
        return;
      }
      let newNum = num1.substring(0, num1.length - 1);

      num1.length == 1 ? handleNum1("0") : handleNum1(newNum);
      break;
    case "=":
      handleNum1(String(getResult(operator, num2, num1)));
      handleNum2("");
      handleOperator("");
      break;
  }
};

export default handleFunctionType;
