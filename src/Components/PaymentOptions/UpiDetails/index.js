import React, { Component } from 'react'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            upiMethodSelected: 'phonePe'
        };
    }

    setUpiMethod = (paymentMethod) => {
        this.setState({
            upiMethodSelected: paymentMethod
        });
    }

    render() {
        const updateMethod = this.state.upiMethodSelected;
        return (
            <Card>
                <CardBody>
                    <Row>
                        <Col sm="1" value='phonePe' >
                            <div onClick={()=>this.setUpiMethod('phonePe')}>
                                <img alt="timer" src="Assets/phonepe.png" className="img-sml" />
                            </div>
                        </Col>

                        <Col sm="1" value='gPay' className="ml-2" >
                            <div onClick={()=>this.setUpiMethod('gPay')} >
                                <img alt="timer" src="Assets/gpay.png" className="img-sml" />
                            </div>
                        </Col>

                        <Col sm="1" value='paytm' className="ml-2" >
                        <div onClick={()=>this.setUpiMethod('paytm')} >
                            <img alt="timer" src="Assets/paytm.jpg" className="img-sml" />
                            </div>
                        </Col>
                    </Row>
                    <Form>
                        <Row >
                        { updateMethod === 'phonePe' &&
                            <FormGroup>
                                <Label for="phonepeUpi">
                                    Enter PhonePe Number / UPI id
                                    </Label>
                                <Input type="text" name="phonepeUpi" id="phonepeUpi" placeholder="Enter Your Phonepe Number or UPI Id" />
                            </FormGroup>
                        }
                        { updateMethod === 'gPay' &&
                            <FormGroup>
                                <Label for="gpayUpi">
                                    Enter Google Pay Number / UPI id
                                    </Label>
                                <Input type="text" name="gpayUpi" id="gpayUpi" placeholder="Enter Your Google Pay Number or UPI Id" />
                            </FormGroup>
                        }
                        { updateMethod === 'paytm' &&
                            <FormGroup>
                                <Label for="paytmNumber">
                                    Enter Paytm Number
                                    </Label>
                                <Input type="text" name="paytmNumber" id="paytmNumber" placeholder="Enter Your Paytm Number" />
                            </FormGroup>
                        }
                        </Row>
                        <Row>
                            <Button color='primary'>
                                Add Details
                                </Button>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}
