// React Modules
import { useState } from "react";

// Components
import { NavMenu } from "./components/NavMenu";
import { CalculatorHeader } from "./components/CalculatorHeader";
import { BasicMode } from "./page/BasicMode";

// Custom Hooks
import useBasicCalculator from "./CustomHooks/useBasicCalculator";

// Styles
import "./styles/calculator.css";
import "./styles/NavMenu/navMenu.css";
import "./styles/BasicMode/basicMode.css";

function App() {
  // States
  const {
    handleNum1,
    num1,
    handleNum2,
    num2,
    handleOperator,
    operator,
    handleResult,
    result,
  } = useBasicCalculator();

  return (
    <div className="calcWrapper">
      <NavMenu />
      <CalculatorHeader />

      <div className="calcBody">
        {/* This depends on which mode is selected */}
        <BasicMode
          handleEvents={{
            handleNum1,
            handleNum2,
            handleOperator,
            handleResult,
          }}
          states={{
            num1,
            num2,
            operator,
            result,
          }}
        />
        {/* <div className="calcStandardMode"></div> */}
      </div>
    </div>
  );
}

export default App;
