import React, { useState } from 'react';
import "./EightBall.css";
import responses from './responses';

// Component EightBall takes a prop 'answers' which is an array
const EightBall = ({ answers=responses }) => {
  /**
   * genRandom generates a random number between 0 and the length of the answers array
   */
  /**
   * Need to:
   * 1. Use state to set an initial msg and color for the ball ("Think of a Question" and "black")
   * 2. Add event listener (onClick) to the eight ball so that:
   *   * a random message/color will be chosen
   *   * it will update the state of the eightball with the new message and color.
   */
  const genRandom = () => Math.floor(Math.random() * answers.length);
  const getAnswer = () => {
    const idx = genRandom();
    setMsg(answers[idx].msg);
    setColor(answers[idx].color);
  }
  const [ msg, setMsg ] = useState("Think of a Question");
  const [ color, setColor ] = useState("black");
  return (
    <div className="EightBall">
      <div style={{backgroundColor: color}} onClick={getAnswer}className="EightBall-img">
        <p className="EightBall-text">{msg}</p>
      </div>
    </div>
  )
}

export default EightBall;