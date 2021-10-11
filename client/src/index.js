import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import {TheContextProvider} from "./theContext"
import App from "./App"

ReactDOM.render(
    <Router>
        <TheContextProvider>
            <App />
        </TheContextProvider>
    </Router>
    ,
     document.getElementById("root"))