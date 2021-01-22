import React, { useState } from 'react';
import "./EightBall.css";
import responses from './responses';

const randSelection = (arr) => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

// Component EightBall takes a prop 'answers' which is an array
const EightBall = ({ answers=responses }) => {
  /**
   * genRandom generates a random number between 0 and the length of the answers array
   */
  /**
   * Need to:
   * 1. Use state to set an initial msg and color for the ball ("Think of a Question" and "black")
   * 2. Add click event listener to the eight ball so that:
   *   * a random message/color will be chosen
   *   * it will update the state of the eightball with the new message and color.
   */

  // set initial state for eight ball
  const [ msg, setMsg ] = useState("Think of a Question");
  const [ color, setColor ] = useState("black");

  const handleClick = () => {
    const { msg, color } = randSelection(answers);
    setMsg(msg);
    setColor(color);
  }

  return (
    <div 
      className="EightBall" 
      style={{backgroundColor: color}} 
      onClick={handleClick}
    >
      <p className="EightBall-text">{msg}</p>
    </div>
  )
}

export default EightBall;