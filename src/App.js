import * as React from "react";
import { Route, Routes } from "react-router-dom"
import './App.css';
import { Entry } from "./entry";
import { Assignment, Candidate, ClientValidate } from "./candidate";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Entry />}></Route>
          <Route path="/candidate" element={<Candidate />}>
              <Route path="" element={<ClientValidate />}></Route>
              <Route path="assignment" element={<Assignment />}></Route>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
