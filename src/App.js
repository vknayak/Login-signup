import React, { Component } from 'react'
// import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'

import SignUp from "./Components/SignUp"
import "./App.css"
import { Route,  Switch} from 'react-router-dom'

import Login from './Components/Login';
import Home from './Components/Home';







export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        
        }
    }
    

    render() {
        return (
         <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/SignUp" component={SignUp} />
         <Route exact path="/Login" component={Login} />
         </Switch>
        )
    }
}

export default App
