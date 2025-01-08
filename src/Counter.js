import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const maxLimit = 100;
  const minLimit = 0;
  const handleIncrement = () => {
    if (count + step <= maxLimit) {
      setCount(count + step);
    }
  };
  const handleDecrement = () => {
    if (count - step >= minLimit) {
      setCount(count - step);
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
      <button onClick={handleIncrement} disabled={count + step > maxLimit}>
        Increment
      </button>
      <button onClick={handleDecrement} disabled={count - step < minLimit}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <p>Min Limit: {minLimit}</p>
        <p>Max Limit: {maxLimit}</p>
      </div>
    </div>
  );
};
export default Counter;
