import React from 'react';
import { Col, Row } from 'react-bootstrap';

const PageNotFound = () => {
    return(
        <div id="content">
            <div className="container">

                <div> 
                    <Col md={12}>

                        <ul className="breadcrumb">
                            <li><a href="404.html#">Home</a>
                            </li>
                            <li>Page not found</li>
                        </ul>


                    <div id="error-page"> 
                        <Row>
                            <div> 
                                <Col sm={6} smOffset={3}>
                                    <div className="box">

                                        <p className="text-center">
                                            <img src="img/logo.png" alt="Obaju template" />
                                        </p>

                                        <h3>We are sorry - this page is not here anymore</h3>
                                        <h4 className="text-muted">Error 404 - Page not found</h4>

                                        <p className="text-center">To continue please use the <strong>Search form</strong> or <strong>Menu</strong> above.</p>

                                        <p className="buttons"><a href="index.html" className="btn btn-primary"><i className="fa fa-home"></i> Go to Homepage</a>
                                        </p>
                                    </div>
                                </Col>    
                            </div>
                        </Row>    
                    </div>
                    </Col>


                </div>
            </div>
        </div>
    );
}

export default PageNotFound;