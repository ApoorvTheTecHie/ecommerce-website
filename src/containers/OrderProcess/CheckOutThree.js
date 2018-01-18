import React from 'react';
import { Col, Row } from 'react-bootstrap';
import OrderSummary from './OrderSummary';

const CheckOutThree = () => {
    return(
        <div className="container">

            <div> 
                <Col md={12}>
                    <ul className="breadcrumb">
                        <li><a href="checkout3.html#">Home</a>
                        </li>
                        <li>Checkout - Payment method</li>
                    </ul>
                </Col>    
            </div>
            <div id="checkout">
                <Col md={9}>
                    <div className="box">
                        <form method="post" action="checkout4.html">
                            <h1>Checkout - Payment method</h1>
                            <ul className="nav nav-pills nav-justified">
                                <li><a href="checkout1.html"><i className="fa fa-map-marker"></i><br />Address</a>
                                </li>
                                <li><a href="checkout2.html"><i className="fa fa-truck"></i><br />Delivery Method</a>
                                </li>
                                <li className="active"><a href="checkout3.html#"><i className="fa fa-money"></i><br />Payment Method</a>
                                </li>
                                <li className="disabled"><a href="checkout4.html"><i className="fa fa-eye"></i><br />Order Review</a>
                                </li>
                            </ul>

                            <div className="content">
                                <div> 
                                    <Row>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="box payment-method">

                                                    <h4>Paypal</h4>

                                                    <p>We like it all.</p>

                                                    <div className="box-footer text-center">

                                                        <input type="radio" name="payment" value="payment1" />
                                                    </div>
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="box payment-method">

                                                    <h4>Payment gateway</h4>

                                                    <p>VISA and Mastercard only.</p>

                                                    <div className="box-footer text-center">

                                                        <input type="radio" name="payment" value="payment2" />
                                                    </div>
                                                </div>
                                            </Col>    
                                        </div>

                                        <div> 
                                            <Col sm={6}>
                                                <div className="box payment-method">

                                                    <h4>Cash on delivery</h4>

                                                    <p>You pay when you get it.</p>

                                                    <div className="box-footer text-center">

                                                        <input type="radio" name="payment" value="payment3" />
                                                    </div>
                                                </div>
                                            </Col>    
                                        </div>
                                    </Row>    
                                </div>

                            </div>

                            <div className="box-footer">
                                <div className="pull-left">
                                    <a href="basket.html" className="btn btn-default"><i className="fa fa-chevron-left"></i>Back to Shipping method</a>
                                </div>
                                <div className="pull-right">
                                    <button type="submit" className="btn btn-primary">Continue to Order review<i className="fa fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Col>
            </div>

                <div> 
                    <Col md={3}>
                        <OrderSummary />
                    </Col>    
                </div>

            </div>
    );
}

export default CheckOutThree; 