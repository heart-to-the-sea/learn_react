import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import HocComponentPage from "./views/HocComponentPage";
import RenderPropsPage from "./views/RenderPropsPage";
import HooksPage from "./views/HooksPage";
/**
 * 封装 input输入逻辑
 */
function useInput<DOM extends HTMLInputElement>(): {
  value: string;
  onChange: ChangeEventHandler<DOM>;
} {
  const [value, setValue] = useState<string>("");
  const onChange = (e: ChangeEvent<DOM>) => {
    const val = e.target.value;
    setValue(val);
  };
  return { value, onChange };
}

function App() {
  const username = useInput();
  const password = useInput();
  const handleSubmit = () => {
    console.log(username.value, password.value);
  };
  return (
    <div className="App">
      {/* <input type="text" {...username}/>
      <input type="text" {...password}/>
      <button onClick={handleSubmit}>submit</button> */}
      <HocComponentPage/>
      <RenderPropsPage />
      <HooksPage />
    </div>
  );
}

export default App;
