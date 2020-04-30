import React, { Component } from 'react'
import {Container} from 'muicss/react';
import history from "./history"

import Button from '@material-ui/core/Button';


export class Home extends Component {

    SignUpHandler=() =>{
        history.push("/SignUp")
    }

    LoginHandler=() =>{
        history.push("/Login")
    }

    render() {
        return (

           
            <Container fluid={true}>
                <h1>Welcome to React World</h1>
                <Button color="inherit" onClick={this.SignUpHandler} style={{backgroundColor:"Brown"}}>SignUp</Button>
                <Button color="inherit" onClick={this.LoginHandler} style={{backgroundColor:"Brown",marginLeft:20}}>Login</Button>
                <br /> <br />
                <img src="https://skshlaw.com/wp-content/uploads/2015/01/To-be-Updated-Soon1.jpg" alt="to be updated..." />
            </Container>
        )
    }
}

export default Home