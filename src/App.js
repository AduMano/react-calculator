import "./styles/calculator.css";

function App() {
  return (
    <div className="calcWrapper">
      <div className="calcNavMenu">
        {/* 2 of these three list is interactable, by pressing the button to change the modes. */}
        {/* Those button has their own state if they are selected or not */}
        <ul>
          <li>
            <h3>CALCU</h3>
          </li>
          <li>
            <button>BASIC</button>
          </li>
          <li>
            <button>STANDARD</button>
          </li>
        </ul>
      </div>

      <div className="calcHeader">
        {/* The Heading's position is absolute to ignore the flow rule */}
        <button>☰</button>
        {/* Then the Menu Button will be relative to the parent's position */}
        <h2>BASIC</h2>
      </div>

      <div className="calcBody">
        {/* This depends on which mode is selected */}
        <div className="calcBasicMode"></div>
        <div className="calcStandardMode"></div>
      </div>
    </div>
  );
}

export default App;
