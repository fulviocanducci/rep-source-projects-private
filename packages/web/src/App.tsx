import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const operation = {
    increment: () => setValue(value + 1),
    decrement: () => setValue(value - 1),
  };
  return (
    <div>
      <div>{value}</div>
      <button onClick={operation.increment}>Incrementar</button>
      <button onClick={operation.decrement}>Decremento</button>
    </div>
  );
}

export default App;
