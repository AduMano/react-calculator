// React Modules
import { useState } from "react";

// Components
import { NavMenu } from "./components/NavMenu";
import { CalculatorHeader } from "./components/CalculatorHeader";
import { BasicMode } from "./page/BasicMode";
import { StandardMode } from "./page/StandardMode";

// Custom Hooks
import useBasicCalculator from "./CustomHooks/useBasicCalculator";
import useNavMenu from "./CustomHooks/useNavMenu";

// Styles
import "./styles/calculator.css";
import "./styles/NavMenu/navMenu.css";
import "./styles/BasicMode/basicMode.css";
import "./styles/StandardMode/standardMode.css";

function App() {
  /// States
  const [mode, setMode] = useState("standard");

  /// Use Custom Hook
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
  const navHandle = useNavMenu();

  /// Logic
  // Nav
  const handleMode = (value) => {
    setMode(value);
  };

  return (
    <div className="calcWrapper">
      <NavMenu handleNavMenu={navHandle} modeSetup={handleMode} />
      <CalculatorHeader title={mode.toUpperCase()} handleNavMenu={navHandle} />

      <div className="calcBody">
        {/* This depends on which mode is selected */}
        {mode == "basic" && (
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
        )}
        {mode == "standard" && <StandardMode />}
      </div>
    </div>
  );
}

export default App;
