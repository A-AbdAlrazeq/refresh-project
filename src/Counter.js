import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
  /* incorrect: onClick={setCount(count + 1)}
This immediately calls setCount(count + 1) during rendering, which is not correct.

Correct: onClick={() => setCount(count + 1)}
This uses an arrow function to delay execution until the button is clicked.
*/
};
export default Counter;
