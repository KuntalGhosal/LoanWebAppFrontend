import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default class BankDetails extends Component {
    render() {
        return (
            <Card>
              <CardBody>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="bankName">Select Bank</Label>
                            <Input type="select" name="bankName" id="bankName">
                                <option>SBI</option>
                                <option>Indian Bank</option>
                                <option>HDFC</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="accountNumber">Account Number</Label>
                            <Input type="text" name="accountNumber" id="accountNumber" placeholder="Enter Account Number" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <FormGroup>
                            <Label for="accountHolderName">Account Holder Name</Label>
                            <Input type="text" name="accountHolderName" id="accountHolderName" placeholder="Enter Account Holder Name" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="ifscNumber">IFSC Code</Label>
                            <Input type="text" name="ifscNumber" id="ifscNumber" placeholder="IFSC Code" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="branchName">Branch Name</Label>
                            <Input type="text" name="branchName" id="branchName" placeholder="Branch Name" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <NavLink to='/paymentOptions' className="navlink-item">
                        <Button color="primary" className="btn-spacing">
                            Add Bank
                        </Button>
                    </NavLink>
                </Row>
                </CardBody>
            </Card>
        )
    }
}
