import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default class Login extends Component {
    render() {
        return (
            <Container className="container-body">
                <Row>
                    <Col>
                        <h1>
                            Log In
                        </h1>
                    </Col>
                </Row>
                <Form>
                    <FormGroup>
                        <Label for="newUsername">Username</Label>
                        <Input type="username" name="username" id="newUsername" placeholder="enter username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="newPassword">Password</Label>
                        <Input type="password" name="password" id="newPassword" placeholder="enter password" />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Remember me
                        </Label>
                    </FormGroup>

                    <NavLink to='/updateProfile' className="navlink-item">
                        <Button color="primary" className="btn-spacing">
                        Log In
                        </Button>
                    </NavLink>
                </Form>
            </Container>
        )
    }
}
