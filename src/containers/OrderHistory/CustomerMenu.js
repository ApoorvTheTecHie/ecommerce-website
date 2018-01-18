import React from 'react';
import { Col } from 'react-bootstrap';

const CustomerMenu = () => {
    return(
    <div>    

            <Col md={3}>
                    <div className="panel panel-default sidebar-menu">

                        <div className="panel-heading">
                            <h3 className="panel-title">Customer section</h3>
                        </div>

                        <div className="panel-body">

                            <ul className="nav nav-pills nav-stacked">
                                <li className="active">
                                    <a href="customer-orders.html"><i className="fa fa-list"></i> My orders</a>
                                </li>
                                <li>
                                    <a href="customer-wishlist.html"><i className="fa fa-heart"></i> My wishlist</a>
                                </li>
                                <li>
                                    <a href="customer-account.html"><i className="fa fa-user"></i> My account</a>
                                </li>
                                <li>
                                    <a href="index.html"><i className="fa fa-sign-out"></i> Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>    
            </Col>   
        </div>   
    );
}

export default CustomerMenu;