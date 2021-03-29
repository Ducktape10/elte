import { useState } from "react";

const CalculatorButton = () => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
    </div>
  );
};

export default CalculatorButton;