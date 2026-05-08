import React from "react";
import Child from "./child";

function App() {
  const name = "Arbaaz";
  const age = 19;

  return (
    <div>
      <h1>Parent Component</h1>

      <Child name={name} age={age} />
    </div>
  );
}

export default App;




