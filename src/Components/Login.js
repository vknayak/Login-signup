import React, { Component } from 'react'
import {Container} from 'muicss/react';
export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""

        }
    }

    changeInputHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }


    login = (event) => {
        console.log(this.state)

    }

    render() {
        // alert("thankyou for signing up")
        return (
            <Container>
            <form className="mui-form" onSubmit={this.login}>
            
            <legend>Login Page</legend>
            <div className="mui-textfield">
                <input type="text" name="username" required onChange={this.changeInputHandler}></input>
                <label>Username</label>
            </div>
            <div className="mui-textfield">
                <input type="password" name="password" required onChange={this.changeInputHandler}></input>
                <label>password</label>
            </div>
            <button type="submit" className="mui-btn mui-btn--raised">Submit</button>
            </form>
            </Container>
        )
    }
}

export default Login
