import './Calculator.css';
import Screen from './Screen';

export default function RenderCalc() {
  return (
    <table>
      <tr>
        <Screen />
      </tr>
      <tr>
        <td className="otherPlaces elements">AC</td>
        <td className="otherPlaces elements">+/-</td>
        <td className="otherPlaces elements">%</td>
        <td className="operations elements">&#247;</td>
      </tr>
      <tr>
        <td className="otherPlaces elements">7</td>
        <td className="otherPlaces elements">8</td>
        <td className="otherPlaces elements">9</td>
        <td className="operations elements">x</td>
      </tr>
      <tr>
        <td className="otherPlaces elements">4</td>
        <td className="otherPlaces elements">5</td>
        <td className="otherPlaces elements">6</td>
        <td className="operations elements">-</td>
      </tr>
      <tr>
        <td className="otherPlaces elements">1</td>
        <td className="otherPlaces elements">2</td>
        <td className="otherPlaces elements">3</td>
        <td className="operations elements">+</td>
      </tr>
      <tr>
        <td className="otherPlaces elements" colSpan="2">0</td>
        <td className="otherPlaces elements">.</td>
        <td className="operations elements">=</td>
      </tr>
    </table>
  );
}
