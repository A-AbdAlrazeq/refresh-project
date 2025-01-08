import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const maxLimit = 100;
  const minLimit = 0;
  const handleIncrement = () => {
    if (count + step <= maxLimit) {
      setCount(count + step);
    } else {
      alert("The Counter can't be greater than 100");
    }
  };
  const handleDecrement = () => {
    if (count - step >= minLimit) {
      setCount(count - step);
    } else {
      alert("The Counter Can't be less than 0");
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Counter:{count}</h1>
      {/* Input to set step value */}
      <label>
        Step:{" "}
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
          max="100"
        />
      </label>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <p>Min Limit: {minLimit}</p>
        <p>Max Limit: {maxLimit}</p>
      </div>
    </div>
  );
  /* incorrect: onClick={setCount(count + 1)}
This immediately calls setCount(count + 1) during rendering, which is not correct.

Correct: onClick={() => setCount(count + 1)}
This uses an arrow function to delay execution until the button is clicked.
*/
};
export default Counter;
