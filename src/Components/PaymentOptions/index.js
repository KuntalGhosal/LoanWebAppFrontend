import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

import BankDetails from './BankDetails';
import UpiDetails from './UpiDetails';

export default class PaymentOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardSelected: true,
            upiSelected: false
        };
    }

    changeToCard = () => {
        console.log('ajij');
        this.setState({
            cardSelected: true,
            upiSelected: false
        })
    }

    changeToUpi = () => {
        this.setState({
            cardSelected: false,
            upiSelected: true
        })
    }

    render() {
        const isCardSelected = this.state.cardSelected;
        const isUpielected = this.state.upiSelected;
        return (
            <Container className="container-body">
                <Row>
                    <h1>
                        Select Payment Option
                    </h1>
                </Row>
                <Form>
                    <FormGroup tag="fieldset">
                        <legend></legend>
                        <FormGroup check >
                            <Label check>
                                <Input type="radio" name="paymentMode" checked={this.state.cardSelected} onChange={this.changeToCard} />{' '}
                                Add Bank Details
                            </Label>
                            {isCardSelected && <BankDetails />}
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="paymentMode" onChange={this.changeToUpi} />{' '}
                                Add UPI
                            </Label>
                            {isUpielected && <UpiDetails />}
                        </FormGroup>

                    </FormGroup>
                    <Row>
                        <NavLink to='/payment'>
                            <Button color='primary'>
                                Get Loan
                            </Button>
                        </NavLink>
                    </Row>
                </Form>
                {/* <img alt="timer" src="Assets/phonepay.png" /> */}
            </Container>
        )
    }
}
