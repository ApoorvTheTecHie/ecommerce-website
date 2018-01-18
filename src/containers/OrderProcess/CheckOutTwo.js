import React from 'react';
import { Col, Row } from 'react-bootstrap';
import OrderSummary from './OrderSummary';

const CheckOutTwo = () => {
    return(
        <div className="container">

            <div> 
                <Col md={12}>
                    <ul className="breadcrumb">
                        <li><a href="checkout2.html#">Home</a>
                        </li>
                        <li>Checkout - Delivery method</li>
                    </ul>
                </Col>    
            </div>
            <div id="checkout">
                <Col md={9}>
                    <div className="box">
                        <form method="post" action="checkout3.html">
                            <h1>Checkout - Delivery method</h1>
                            <ul className="nav nav-pills nav-justified">
                                <li><a href="checkout1.html"><i className="fa fa-map-marker"></i><br />Address</a>
                                </li>
                                <li className="active"><a href="checkout2.html#"><i className="fa fa-truck"></i><br />Delivery Method</a>
                                </li>
                                <li className="disabled"><a href="checkout2.html#"><i className="fa fa-money"></i><br />Payment Method</a>
                                </li>
                                <li className="disabled"><a href="checkout2.html#"><i className="fa fa-eye"></i><br />Order Review</a>
                                </li>
                            </ul>

                            <div className="content">
                                <div> 
                                    <Row>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="box shipping-method">

                                                    <h4>USPS Next Day</h4>

                                                    <p>Get it right on next day - fastest option possible.</p>

                                                    <div className="box-footer text-center">

                                                        <input type="radio" name="delivery" value="delivery1" />
                                                    </div>
                                                </div>
                                            </Col>    
                                        </div>
                                        <div> 
                                            <Col sm={6}>
                                                <div className="box shipping-method">

                                                    <h4>USPS Next Day</h4>

                                                    <p>Get it right on next day - fastest option possible.</p>

                                                    <div className="box-footer text-center">

                                                        <input type="radio" name="delivery" value="delivery2" />
                                                    </div>
                                                </div>
                                            </Col>    
                                        </div>

                                        <div> 
                                            <Col sm={6}>
                                                <div className="box shipping-method">

                                                    <h4>USPS Next Day</h4>

                                                    <p>Get it right on next day - fastest option possible.</p>

                                                    <div className="box-footer text-center">

                                                        <input type="radio" name="delivery" value="delivery3" />
                                                    </div>
                                                </div>
                                            </Col>    
                                        </div>
                                    </Row>    
                                </div>

                            </div>

                            <div className="box-footer">
                                <div className="pull-left">
                                    <a href="basket.html" className="btn btn-default"><i className="fa fa-chevron-left"></i>Back to Addresses</a>
                                </div>
                                <div className="pull-right">
                                    <button type="submit" className="btn btn-primary">Continue to Payment Method<i className="fa fa-chevron-right"></i>
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

export default CheckOutTwo;