import React from "react";
import AppRouter from "./AppRouter";
import Button from "./common/Button";
// styles
import "./styles/App.scss"

const App = () => {
  return (
    <div className="main-app-container">
      <AppRouter />
    </div>
  );
};

export default App;
