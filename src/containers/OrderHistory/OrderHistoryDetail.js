import React from 'react';
import { Col } from 'react-bootstrap';
import CustomerMenu from './CustomerMenu';

const OrderHistoryDetail = () => {
    return(
        <div className="container">
            <CustomerMenu />
            <div id="customer-order">
                <Col md={9}>
                    <div className="box">
                        <h1>Order #1735</h1>

                        <p className="lead">Order #1735 was placed on <strong>22/06/2013</strong> and is currently <strong>Being prepared</strong>.</p>
                        <p className="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>

                        <hr />

                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan="2">Product</th>
                                        <th>Quantity</th>
                                        <th>Unit price</th>
                                        <th>Discount</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="customer-order.html#">
                                                <img src="img/detailsquare.jpg" alt="White Blouse Armani" />
                                            </a>
                                        </td>
                                        <td><a href="customer-order.html#">White Blouse Armani</a>
                                        </td>
                                        <td>2</td>
                                        <td>$123.00</td>
                                        <td>$0.00</td>
                                        <td>$246.00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="customer-order.html#">
                                                <img src="img/basketsquare.jpg" alt="Black Blouse Armani" />
                                            </a>
                                        </td>
                                        <td><a href="customer-order.html#">Black Blouse Armani</a>
                                        </td>
                                        <td>1</td>
                                        <td>$200.00</td>
                                        <td>$0.00</td>
                                        <td>$200.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan="5" className="text-right">Order subtotal</th>
                                        <th>$446.00</th>
                                    </tr>
                                    <tr>
                                        <th colSpan="5" className="text-right">Shipping and handling</th>
                                        <th>$10.00</th>
                                    </tr>
                                    <tr>
                                        <th colSpan="5" className="text-right">Tax</th>
                                        <th>$0.00</th>
                                    </tr>
                                    <tr>
                                        <th colSpan="5" className="text-right">Total</th>
                                        <th>$456.00</th>
                                    </tr>
                                </tfoot>
                            </table>

                        </div>

                        <div className="row addresses">
                            <div className="col-md-6">
                                <Col md={6}>
                                    <h2>Invoice address</h2>
                                    <p>John Brown
                                        <br />13/25 New Avenue
                                        <br />New Heaven
                                        <br />45Y 73J
                                        <br />England
                                        <br />Great Britain
                                    </p>
                                </Col>        
                            </div>
                            <div>
                                <Col md={6}>
                                    <h2>Shipping address</h2>
                                    <p>John Brown
                                        <br />13/25 New Avenue
                                        <br />New Heaven
                                        <br />45Y 73J
                                        <br />England
                                        <br />Great Britain
                                    </p>
                                </Col>    
                            </div>
                        </div>

                    </div>
                </Col>    
            </div>
        </div>
    );
}

export default OrderHistoryDetail;