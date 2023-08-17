import React from 'react';
import propTypes from 'prop-types';
import './Screen.css';

function Screen({ calcScreen }) {
  return (
    <td className="zeroPlace" colSpan={4}>{calcScreen}</td>
  );
}

Screen.propTypes = {
  calcScreen: propTypes.string,
};

Screen.defaultProps = {
  calcScreen: '0',
};

export default Screen;
