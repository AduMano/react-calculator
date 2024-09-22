import React, { useMemo, useCallback } from "react";

// Scripts
import handleFunctionType from "../../scripts/StandardMode/handleFunctionType";
import handleNumberType from "../../scripts/StandardMode/handleNumberType";
import handleOperatorType from "../../scripts/StandardMode/handleOperatorType";

// Components
import InputButton from "./InputButton";

export default function InputKeys({ handleState, getState }) {
  // Handle
  const { handleNum1, handleNum2, handleOperator } = handleState;
  const { num1, num2, operator } = getState;

  // Construct Buttons
  const buttonConfig = useMemo(
    () => [
      { className: "lightGrey", btnType: "function", value: "C" },
      { className: "lightGrey", btnType: "function", value: "←" },
      { className: "lightGrey", btnType: "operator", value: "+" },
      { className: "grey", btnType: "number", value: "7" },
      { className: "grey", btnType: "number", value: "8" },
      { className: "grey", btnType: "number", value: "9" },
      { className: "lightGrey", btnType: "operator", value: "-" },
      { className: "grey", btnType: "number", value: "4" },
      { className: "grey", btnType: "number", value: "5" },
      { className: "grey", btnType: "number", value: "6" },
      { className: "lightGrey", btnType: "operator", value: "⨯" },
      { className: "grey", btnType: "number", value: "1" },
      { className: "grey", btnType: "number", value: "2" },
      { className: "grey", btnType: "number", value: "3" },
      { className: "orange", btnType: "function", value: "=" },
      { className: "grey", btnType: "number", value: "0" },
      { className: "lightGrey", btnType: "number", value: "." },
      { className: "lightGrey", btnType: "operator", value: "÷" },
    ],
    []
  );
  const rows = useMemo(
    () => [
      [buttonConfig[0], buttonConfig[1], buttonConfig[2]],
      [buttonConfig[3], buttonConfig[4], buttonConfig[5], buttonConfig[6]],
      [buttonConfig[7], buttonConfig[8], buttonConfig[9], buttonConfig[10]],
      [buttonConfig[11], buttonConfig[12], buttonConfig[13], buttonConfig[14]],
      [buttonConfig[15], buttonConfig[16], buttonConfig[17]],
    ],
    []
  );

  // Logic
  const handleClick = useCallback(
    (e) => {
      const btn = e.target;
      const value = btn.innerText;
      const btnType = btn.getAttribute("btn-type");

      switch (btnType) {
        case "function":
          handleFunctionType(
            value,
            { num1, num2, operator },
            { handleNum1, handleNum2, handleOperator }
          );
          break;
        case "number":
          handleNumberType(value, { num1 }, { handleNum1 });
          break;
        case "operator":
          handleOperatorType(
            value,
            { num1, num2, operator },
            { handleNum1, handleNum2, handleOperator }
          );
          break;
      }
    },
    [handleNum1, handleNum2, handleOperator, num1, num2, operator]
  );

  return (
    <table>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((btn, btnIndex) => (
              <td
                key={btnIndex}
                colSpan={btnIndex == 0 && rowIndex == 0 ? 2 : 1} // The "C" or Clear Button
                rowSpan={btnIndex == 3 && rowIndex == 3 ? 2 : 1} // The "=" or Equal Button
                height={btnIndex == 3 && rowIndex == 3 ? "100px" : ""} // Sets the height of equal button
              >
                <InputButton
                  props={{
                    className: btn.className,
                    btnType: btn.btnType,
                    onClick: handleClick,
                    value: btn.value,
                  }}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
