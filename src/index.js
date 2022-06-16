import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LayoutPrimary from "./common/LayoutPrimary";
import { BrowserRouter as Router } from "react-router-dom"
// Styles



ReactDOM.render(<>
    <Router>
        <LayoutPrimary>
            <App />
        </LayoutPrimary>
    </Router>
</>, document.getElementById('root'));