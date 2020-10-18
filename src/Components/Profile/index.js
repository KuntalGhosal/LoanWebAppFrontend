import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap'

export default class Profile extends Component {
    render() {
        return (
            <Container className="container-body">
                <Row>
                    <Col>
                        <h1>
                            Update Profile
                        </h1>
                    </Col>
                </Row>
                <Form>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstname" id="firstname" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastname" id="lastName" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Full Address</Label>
                        <Input type="textArea" name="address" id="address" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="addessproof">Address proof</Label>
                        <Input type="file" name="addessproof" id="addessproof" />
                        <FormText color="muted">
                            Upload a valid Document as an address proof
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="adharCard">Adhar Card</Label>
                        <Input type="file" name="adharCard" id="adharCard" />
                        <FormText color="muted">
                            Upload a valid Adhar Card both backside and frontside
                        </FormText>
                    </FormGroup>
                    <Button color="primary">
                        <NavLink to='/' className="navlink-item">Save Profile</NavLink>
                    </Button>
                </Form>
            </Container>
        )
    }
}
