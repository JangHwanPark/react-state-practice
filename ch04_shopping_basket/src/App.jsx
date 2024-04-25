import logo from './logo.svg';
import './scss/_base.scss';
import {Outlet} from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="container">
      <Outlet/>
    </div>
  );
}

export default App;