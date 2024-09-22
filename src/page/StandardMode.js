import React from "react";

export const StandardMode = () => {
  return (
    <div className="calcStandardMode">
      <div className="outputScreen">
        <h3 className="subScreen">0 +</h3>
        <h1 className="mainScreen">0</h1>
      </div>

      <div className="inputSection">
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                <button className="lightGrey">C</button>
              </td>
              <td>
                <button className="lightGrey">←</button>
              </td>
              <td>
                <button className="lightGrey">+</button>
              </td>
            </tr>

            <tr>
              <td>
                <button className="grey">7</button>
              </td>
              <td>
                <button className="grey">8</button>
              </td>
              <td>
                <button className="grey">9</button>
              </td>
              <td>
                <button className="lightGrey">-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="grey">4</button>
              </td>
              <td>
                <button className="grey">5</button>
              </td>
              <td>
                <button className="grey">6</button>
              </td>
              <td>
                <button className="lightGrey">⨯</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="grey">1</button>
              </td>
              <td>
                <button className="grey">2</button>
              </td>
              <td>
                <button className="grey">3</button>
              </td>
              <td rowSpan={2} height="100px">
                <button className="orange">=</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="grey">0</button>
              </td>
              <td>
                <button className="lightGrey">.</button>
              </td>
              <td>
                <button className="lightGrey">÷</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
