import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CustomerMenu from './CustomerMenu';

const CustomerAccount = () => {
    return(
        <div>
            <div className="container">
                <CustomerMenu />
                <div> 
                    <Col md={9}>
                            <div className="box">
                                <h1>My account</h1>
                                <p className="lead">Change your personal details or your password here.</p>
                                <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                                <h3>Change password</h3>

                                <form>
                                    <div>
                                        <Row>
                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="password_old">Old password</label>
                                                        <input type="password" className="form-control" id="password_old" />
                                                    </div>
                                                </Col>    
                                            </div>
                                        </Row>    
                                    </div>
                                    <div>
                                        <Row>
                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="password_1">New password</label>
                                                        <input type="password" className="form-control" id="password_1" />
                                                    </div>
                                                </Col>    
                                            </div>
                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="password_2">Retype new password</label>
                                                        <input type="password" className="form-control" id="password_2" />
                                                    </div>
                                                </Col>    
                                            </div>
                                        </Row>    
                                    </div>

                                    <div className="text-center">
                                        <Col sm={12}>
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-save"></i> Save new password</button>
                                        </Col>    
                                    </div>
                                </form>

                                <hr />

                                <h3>Personal details</h3>
                                <form>
                                    <div>
                                        <Row>
                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="firstname">First Name</label>
                                                        <input type="text" className="form-control" id="firstname" />
                                                    </div>
                                                </Col>    
                                            </div>
                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="lastname">Last Name</label>
                                                        <input type="text" className="form-control" id="lastname" />
                                                    </div>
                                                </Col>    
                                            </div>
                                        </Row>    
                                    </div>

                                    <div>
                                        <Row>
                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="company">Company</label>
                                                        <input type="text" className="form-control" id="company" />
                                                    </div>
                                                </Col>    
                                            </div>
                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="street">Street</label>
                                                        <input type="text" className="form-control" id="street" />
                                                    </div>
                                                </Col>    
                                            </div>
                                        </Row>    
                                    </div>

                                    <div>
                                        <Row>
                                            <div> 
                                                <Col sm={6} md={3}>
                                                    <div className="form-group">
                                                        <label htmlFor="city">Company</label>
                                                        <input type="text" className="form-control" id="city" />
                                                    </div>
                                                </Col>    
                                            </div>
                                            <div> 
                                                <Col sm={6} md={3}>
                                                    <div className="form-group">
                                                        <label htmlFor="zip">ZIP</label>
                                                        <input type="text" className="form-control" id="zip" />
                                                    </div>
                                                </Col>    
                                            </div>
                                            <div> 
                                                <Col sm={6} md={3}>
                                                    <div className="form-group">
                                                        <label htmlFor="state">State</label>
                                                        <select className="form-control" id="state"></select>
                                                    </div>
                                                </Col>    
                                            </div>
                                            <div> 
                                                <Col sm={6} md={3}>
                                                    <div className="form-group">
                                                        <label htmlFor="country">Country</label>
                                                        <select className="form-control" id="country"></select>
                                                    </div>
                                                </Col>    
                                            </div>

                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="phone">Telephone</label>
                                                        <input type="text" className="form-control" id="phone" />
                                                    </div>
                                                </Col>    
                                            </div>
                                            <div> 
                                                <Col sm={6}>
                                                    <div className="form-group">
                                                        <label htmlFor="email">E-mail</label>
                                                        <input type="text" className="form-control" id="email" />
                                                    </div>
                                                </Col>    
                                            </div>
                                            <div className="text-center">
                                                <Col sm={12}>
                                                    <button type="submit" 
                                                            className="btn btn-primary">
                                                            <i className="fa fa-save"></i> 
                                                            Save changes
                                                    </button>
                                                </Col>
                                            </div>
                                        </Row>    
                                    </div>
                                </form>
                            </div>
                    </Col>    
                </div>
            </div>
        </div>     
    );
}

export default CustomerAccount;