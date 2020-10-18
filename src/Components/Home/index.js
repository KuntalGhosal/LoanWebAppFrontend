import React, { Component } from 'react'
import axios from 'axios'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    // componentDidMount() {
    //     axios({
    //         "method": "GET",
    //         "url": "http://localhost:1337/products",
    //         "headers": {
    //             "content-type": "application/json"
    //         }
    //     }).then((products) => {
    //         this.setState(
    //             { product: [...products.data] }
    //         )
    //         alert(this.state.product)
    //     })
    // }

    render() {
        return (
            <Container className="container-body">
                <Row>
                    <Col>
                        <h1>
                            Get Instant Loan
                        </h1>
                    </Col>
                </Row>
                <Form>
                    <FormGroup>
                        <Label for="selectAmount">Select Amount</Label>
                        <Input type="select" name="amountSelected" id="selectAmount">
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="selectDuration">Select Duration</Label>
                        <Input type="select" name="durationSelected" id="selectDuration">
                            <option>1 month</option>
                            <option>2 months</option>
                            <option>3 months</option>
                        </Input>
                    </FormGroup>
                   
                    <Row>
                        <Col md="5">
                            <h4>
                                Calculated Amount
                        </h4>
                        </Col>
                        <Col>
                            <p>
                                2000
                        </p>
                        </Col>
                    </Row>
                    <NavLink to='/paymentOptions' className="navlink-item">
                        <Button color="primary" className="btn-spacing">
                            Proceed For Payment
                        </Button>
                    </NavLink>
                </Form>
            </Container>
        )
    }
}
