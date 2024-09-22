const handleResult = (operator, num1, num2) => {
  let result = 0;
  let selectedOperator = {
    "+": "+",
    "-": "-",
    "⨯": "*",
    "÷": "/",
    "*": "*",
    "/": "/",
  };

  switch (selectedOperator[operator]) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      let temp = parseFloat(num1) / parseFloat(num2);
      result = isNaN(temp) ? "Error" : temp;
      break;
  }

  return result;
};

export default handleResult;
