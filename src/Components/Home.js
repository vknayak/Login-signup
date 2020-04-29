import React, { Component } from 'react'
import history from "./history"

export class Home extends Component {

    SignUpHandler=() =>{
        history.push("/SignUp")
    }

    LoginHandler=() =>{
        history.push("/Login")
    }

    render() {
        return (
            <div>
                <h1>This is the Home page</h1>
                <button onClick={this.SignUpHandler}>SignUp</button>
                <button onClick={this.LoginHandler}>Login</button>
            </div>
        )
    }
}

export default Home