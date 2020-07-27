import React, { useState, useCallback } from "react";

function App() {
  const [value, setValue] = useState(0);
  const operation = {
    increment: useCallback(() => setValue(value + 1), [value]),
    decrement: useCallback(() => setValue(value - 1), [value]),
    multiplies: useCallback(() => {
      const input = parseInt(prompt("Write number", "0"));
      if (input && input > 0) {
        let num = value;
        if (value === 0) {
          num = num + 1;
        }
        setValue(input * num);
      }
    }, [value]),
    set: useCallback(() => {
      const input = parseInt(prompt("Write number", "0"));
      if (!isNaN(input)) {
        setValue(input);
      }
    }, [value]),
  };
  return (
    <div>
      <div>{value}</div>
      <div style={{ height: 30 }}>
        <button onClick={operation.set}>Alterar valor</button>
      </div>
      <div style={{ height: 30 }}>
        <button onClick={operation.multiplies}>Multiplicar</button>
      </div>
      <div style={{ height: 30 }}>
        <button onClick={operation.increment}>Incrementar</button>
      </div>
      <div style={{ height: 30 }}>
        {value > 0 && <button onClick={operation.decrement}>Decremento</button>}
      </div>
    </div>
  );
}

export default App;
