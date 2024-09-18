import { useState } from "react";

function useBasicCalculator() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  const handleNum1 = (val) => {
    setNum1(val);
  };

  const handleNum2 = (val) => {
    setNum2(val);
  };

  const handleOperator = (val) => {
    setOperator(val);
  };

  const handleResult = () => {
    switch (operator) {
      case "+":
        setResult(parseFloat(num1) + parseFloat(num2));
        break;
      case "-":
        setResult(parseFloat(num1) - parseFloat(num2));
        break;
      case "*":
        setResult(parseFloat(num1) * parseFloat(num2));
        break;
      case "/":
        let result = parseFloat(num1) / parseFloat(num2);
        setResult(isNaN(result) ? "Error" : result);
        break;
    }
  };

  return {
    handleNum1,
    num1,
    handleNum2,
    num2,
    handleOperator,
    operator,
    handleResult,
    result,
  };
}

export default useBasicCalculator;
