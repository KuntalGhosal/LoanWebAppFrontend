import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

import axios from 'axios'

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: ''
        };
    }

    update = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    register = async (event) => {
        event.preventDefault();
        const reqBody = {
            username: this.state.username,
            password: this.state.password,
            phone: this.state.phone
        }

        try {
            const responseData = await axios.post('http://localhost:8000/users', reqBody);
            console.log(responseData);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <Container className="container-body">
                <Row>
                    <Col>
                        <h1>
                            Sign Up
                        </h1>
                    </Col>
                </Row>
                <Form>
                    <FormGroup>
                        <Label for="newEmail">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="newEmail"
                            placeholder="enter your email id"
                            value={this.state.email}
                            onChange={this.update}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="newPhone">Phone</Label>
                        <Input
                            type="phone"
                            name="phone"
                            id="newPhone"
                            placeholder="enter your 10 digit phone number"
                            value={this.state.phone}
                            onChange={this.update}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="newUsername">Username</Label>
                        <Input
                            type="username"
                            name="username"
                            id="newUsername"
                            placeholder="Enter a username"
                            value={this.state.username}
                            onChange={this.update}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="newPassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="newPassword"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.update}
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Terms and conditions
                        </Label>
                    </FormGroup>

                    <NavLink to='/login' className="navlink-item">
                        <Button color="primary" className="btn-spacing" >
                            Sign Up
                        </Button>
                    </NavLink>
                </Form>
            </Container>
        )
    }
}
