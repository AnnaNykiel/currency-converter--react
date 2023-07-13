import React, { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { currencies } from "../currencies";
import {Clock} from "./Clock";

function App() {
  


  };
  return (
    <div className="app">
      <Clock />
      <Form result={result} 
      calculateResult={calculateResult} />
    </div>
  );


export default App;
