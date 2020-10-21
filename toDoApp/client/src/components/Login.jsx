// const React = require('react'); same as import statement below
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// TODO: Build functionaolity to send info to the api


    const LoginComponent = () => {
    
        const [ email, setEmail ] = useState('');
        const [ password, setPassword] = useState('');

        const triggerEmailInputChange = (event) => {
            setEmail(event.target.value);
        }

        const triggerPasswordInputChange = (event) => {
            setPassword(event.target.value)
        }
    
    return (
        
            <Form>
                <h3>Login</h3>
                <FormGroup>
                    <Label htmlFor="userEmail">Email: </Label><br></br>
                    <Input onChange={triggerEmailInputChange} value={email} type="email" name="email" id="userEmail" placeholder="Enter in your Email"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="examplePassword">Password: </Label><br></br>
                    <Input  onChange={triggerPasswordInputChange} value={password}type="password" name="password" placeholder="Enter in your Password"/>
                </FormGroup>
                
             
                <Button outline color="success">Login</Button>
                <p>{email}</p>
                <p>{password}</p>
            </Form>
       
    );

    }



// module.export = LoginComponent
export default LoginComponent;