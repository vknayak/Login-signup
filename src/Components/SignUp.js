import React, { Component } from 'react'
import {Container} from 'muicss/react';
import history from "./history"

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            email: "",
            textarea: "",


        }
    }


    changeInputHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })

    }


    register = (user) => {
        history.push("/Login")
    }
    render() {
        return (
            <Container fluid={true}>
            <form className="mui-form" onSubmit={this.register}>
                <legend>Sigup</legend>
                <div className="mui-textfield">
                    <input type="text" name="username" required onChange={this.changeInputHandler}></input>
                    <label>Username</label>
                </div>
                <div className="mui-textfield">
                    <input type="password" name="password" required onChange={this.changeInputHandler}></input>
                    <label>password</label>
                </div>
                <div className="mui-textfield mui-textfield--float-label">
                    <input type="email" name="email" required onChange={this.changeInputHandler}></input>
                    <label>Required Email Address</label>
                </div>
                <div className="mui-textfield mui-textfield--float-label">
                    <textarea  name="textarea" onChange={this.changeInputHandler}></textarea>
                    <label>Required Textarea</label>
                </div>
                { /*<div className="mui-textfield mui-textfield--float-label">
                    <input type="email" value="mxcnb" onChange={this.changeInputHandler}></input>
                    <label>Email Address</label>
                </div> */}
                <button type="submit" className="mui-btn mui-btn--raised">Submit</button>
            </form>
            </Container>
        )
    }
}

export default SignUp








