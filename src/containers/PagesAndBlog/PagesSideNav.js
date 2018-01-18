import React from 'react';
import { Col } from 'react-bootstrap';
import BannerImage from './BannerImage';

const PagesSideNav = () => {
    return(
        <div> 
            <Col md={3}>

                    <div className="panel panel-default sidebar-menu">

                        <div className="panel-heading">
                            <h3 className="panel-title">Pages</h3>
                        </div>

                        <div className="panel-body">
                            <ul className="nav nav-pills nav-stacked">
                                <li>
                                    <a href="text.html">Text page</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact page</a>
                                </li>
                                <li>
                                    <a href="faq.html">FAQ</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <BannerImage />
                </Col>    
            </div>        

    );
}

export default PagesSideNav;