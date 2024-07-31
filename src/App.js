import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>カウント : {count}</h1>
      <Button
        btn_click={() => {
          setCount(count + 1);
        }}
        btn_txt="+"
      />
      <Button
        btn_click={() => {
          setCount(count - 1);
        }}
        btn_txt="-"
      />
    </div>
  );
}

export default App;
