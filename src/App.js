// Components
import { NavMenu } from "./components/NavMenu";
import { CalculatorHeader } from "./components/CalculatorHeader";
import { NumberInput } from "./components/BasicComponents/NumberInput";
import { OperatorInput } from "./components/BasicComponents/OperatorInput";

// Styles
import "./styles/calculator.css";
import "./styles/NavMenu/navMenu.css";
import "./styles/BasicMode/basicMode.css";

function App() {
  return (
    <div className="calcWrapper">
      <NavMenu />
      <CalculatorHeader />

      <div className="calcBody">
        {/* This depends on which mode is selected */}
        <div className="calcBasicMode">
          <form>
            <NumberInput label={"#1"} type={"number"} isReadOnly={false} />
            <NumberInput label={"#2"} type={"number"} isReadOnly={false} />

            <div className="formResult">
              <OperatorInput />
              <NumberInput label={"RESULT"} type={"number"} isReadOnly={true} />
            </div>

            <input className="submitBtn" type="submit" value="CALCULATE" />
          </form>
        </div>

        {/* <div className="calcStandardMode"></div> */}
      </div>
    </div>
  );
}

export default App;
