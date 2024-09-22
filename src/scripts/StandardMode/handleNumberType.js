const handleNumberType = (value, getState, setState) => {
  const { num1 } = getState;
  const { handleNum1 } = setState;

  // Guard Clause
  if (value == ".") {
    if (num1.includes(".")) return;
  }

  let result = num1 != "0" && num1 != "Error" ? num1 + value : value;

  handleNum1(result);
};

export default handleNumberType;
