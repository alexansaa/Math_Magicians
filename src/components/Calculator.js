import { useState } from 'react';
import './Calculator.css';
import Screen from './Screen';
import Calculate from '../logic/calculate';

class CalcData {
  constructor(total, next, operation) {
    this.total = total;
    this.next = next;
    this.operation = operation;
  }
}

let myCalcData = new CalcData(null, null, null);

export default function RenderCalc() {
  const [screenCalc, setScreenCalc] = useState('0');

  const inputCalc = (e) => {
    myCalcData = Calculate(myCalcData, e.target.innerText);
    setScreenCalc(myCalcData.total);
  };

  return (
    <table>
      <tr>
        <Screen calcScreen={screenCalc} />
      </tr>
      <tr>
        <td className="otherPlaces elements" onClick={inputCalc}>AC</td>
        <td className="otherPlaces elements" onClick={inputCalc}>+/-</td>
        <td className="otherPlaces elements" onClick={inputCalc}>%</td>
        <td className="operations elements" onClick={inputCalc}>&#247;</td>
      </tr>
      <tr>
        <td className="otherPlaces elements" onClick={inputCalc}>7</td>
        <td className="otherPlaces elements" onClick={inputCalc}>8</td>
        <td className="otherPlaces elements" onClick={inputCalc}>9</td>
        <td className="operations elements" onClick={inputCalc}>x</td>
      </tr>
      <tr>
        <td className="otherPlaces elements" onClick={inputCalc}>4</td>
        <td className="otherPlaces elements" onClick={inputCalc}>5</td>
        <td className="otherPlaces elements" onClick={inputCalc}>6</td>
        <td className="operations elements" onClick={inputCalc}>-</td>
      </tr>
      <tr>
        <td className="otherPlaces elements" onClick={inputCalc}>1</td>
        <td className="otherPlaces elements" onClick={inputCalc}>2</td>
        <td className="otherPlaces elements" onClick={inputCalc}>3</td>
        <td className="operations elements" onClick={inputCalc}>+</td>
      </tr>
      <tr>
        <td className="otherPlaces elements" colSpan="2" onClick={inputCalc}>0</td>
        <td className="otherPlaces elements" onClick={inputCalc}>.</td>
        <td className="operations elements" onClick={inputCalc}>=</td>
      </tr>
    </table>
  );
}
