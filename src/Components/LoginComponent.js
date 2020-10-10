import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';  

function Example(props) {
  return (
    <div className="container">
        <div>
        <p>Sign UP</p>
        <h> Create Your Account</h>
                <GoogleLogin
                buttonText="Signup with Google">

                </GoogleLogin>
                <FacebookLogin   buttonText="Sign up with facebook"></FacebookLogin>
                <p>_______________________________  or   _______________________________</p>

        </div>
       
            

                
        <Form>
            <FormGroup row>
            <Label for="Firstname" sm={2}></Label>
            <Col sm={10}>
                <Input type="text" name="firstname" id="firstname" placeholder="First Name" />
            </Col>
            </FormGroup>  
            <FormGroup row>
            <Label for="Lastname" sm={2}></Label>
            <Col sm={10}>
                <Input type="text" name="lastname" id="lastname" placeholder="Last Name" />
            </Col>
            </FormGroup> 
            <FormGroup row>
            <Label for="exampleEmail" sm={2}></Label>
            <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email Address" />
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="examplePassword" sm={2}></Label>
            <Col sm={10}>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </Col>
            </FormGroup>
            <p>By clicking signup you agree our terms and conditions</p>
            <input type="submit" value="SignUP" />
        </Form>
        </div>
    
  );
}

export default Example;