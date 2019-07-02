import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LeftMenu from "./pages/leftmenu";
import Router from "./components/router";
import Header from "./pages/header";


function App() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
    <Header />
    <div className="d-flex" id="wrapper">
      <div className="bg-light-sidebar border-right" id="sidebar-wrapper">
      <LeftMenu />
      </div>
      <div id="page-content-wrapper">
      <Router/>
      </div>
    </div>
  </div>
  );
}

export default App;
