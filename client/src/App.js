import {Switch, Route, Link} from "react-router-dom"
import Home from "./home"
import Day from "./days"
import User from "./users"

function App() {
    return(
        <div>
            <nav>
                <Link to="/">
                    Home
                </Link>
                <Link to="/day">
                    Weekdays & Weekends
                </Link>
                <Link to="/user">
                    Profile
                </Link>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/day">
                    <Day />
                </Route>
                <Route path="/user">
                    <User />
                </Route>
            </Switch>

        </div>
    )
}