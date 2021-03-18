import { useState } from "react";

const CalculatorButton = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  );
};

export default CalculatorButton;