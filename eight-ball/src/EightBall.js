// import React, { useState } from 'react';
import "./EightBall.css";
import responses from './responses';

// Component EightBall takes a prop 'answers' which is an array
const EightBall = ({ answers=responses }) => {
  // generate a random number between 0 and the length of the answers array
  const genRandom = () => Math.floor(Math.random() * answers.length);
  return (
    <div className="EightBall">
      <div className="EightBall-img">
        <p className="EightBall-text">{answers[0].msg}</p>
      </div>
      <div className="EightBall-img">
        <p className="EightBall-text">Think of a Question</p>
      </div>
    </div>
  )
}

export default EightBall;