import React from 'react';
import { Col } from 'react-bootstrap';
import OrderSummary from './OrderSummary';

const CheckOutFour = () => {
    return(
         <div className="container">

            <div> 
                <Col md={12}>
                    <ul className="breadcrumb">
                        <li><a href="checkout4.html#">Home</a>
                        </li>
                        <li>Checkout - Order review</li>
                    </ul>
                </Col>    
            </div>
            <div id="checkout"> 
                <Col md={9}>

                    <div className="box">
                        <form method="post" action="checkout4.html">
                            <h1>Checkout - Order review</h1>
                            <ul className="nav nav-pills nav-justified">
                                <li><a href="checkout1.html"><i className="fa fa-map-marker"></i><br />Address</a>
                                </li>
                                <li><a href="checkout2.html"><i className="fa fa-truck"></i><br />Delivery Method</a>
                                </li>
                                <li><a href="checkout3.html"><i className="fa fa-money"></i><br />Payment Method</a>
                                </li>
                                <li className="active"><a href="checkout4.html#"><i className="fa fa-eye"></i><br />Order Review</a>
                                </li>
                            </ul>

                            <div className="content">
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
                                                    <a href="checkout4.html#">
                                                        <img src="img/detailsquare.jpg" alt="White Blouse Armani" />
                                                    </a>
                                                </td>
                                                <td><a href="checkout4.html#">White Blouse Armani</a>
                                                </td>
                                                <td>2</td>
                                                <td>$123.00</td>
                                                <td>$0.00</td>
                                                <td>$246.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="checkout4.html#">
                                                        <img src="img/basketsquare.jpg" alt="Black Blouse Armani" />
                                                    </a>
                                                </td>
                                                <td><a href="checkout4.html#">Black Blouse Armani</a>
                                                </td>
                                                <td>1</td>
                                                <td>$200.00</td>
                                                <td>$0.00</td>
                                                <td>$200.00</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th colSpan="5">Total</th>
                                                <th>$446.00</th>
                                            </tr>
                                        </tfoot>
                                    </table>

                                </div>
                            </div>

                            <div className="box-footer">
                                <div className="pull-left">
                                    <a href="checkout3.html" className="btn btn-default"><i className="fa fa-chevron-left"></i>Back to Payment method</a>
                                </div>
                                <div className="pull-right">
                                    <button type="submit" className="btn btn-primary">Place an order<i className="fa fa-chevron-right"></i>
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

export default CheckOutFour;