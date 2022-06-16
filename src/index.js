import React from "react";
import ReactDOM from "react-dom";
import LayoutPrimary from "./common/LayoutPrimary";
import { BrowserRouter as Router } from "react-router-dom"
// Styles
import App from "./App";

ReactDOM.render(<>
    <Router>
        <LayoutPrimary>
            <App />
        </LayoutPrimary>
    </Router>
</>, document.getElementById('root'));