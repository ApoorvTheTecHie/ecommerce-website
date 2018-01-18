import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBar from '../../../../webAssignment/practice-vol-1/src/components/SideBar';

const FullWidthDisplay = () => {
    return(
        <div id="content">
            <div className="container">
                <div> 
                    <Col md={12}>
                        <ul className="breadcrumb">
                            <li><a href="category-full.html#">Home</a>
                            </li>
                            <li>Ladies</li>
                        </ul>
                        <div>
                            <SideBar />
                        </div>
                        <div className="box">
                            <h1>Ladies</h1>
                            <p>In our Ladies department we offer wide selection of the 
                                best products we have found and carefully selected worldwide.
                            </p>
                            
                        </div>
                        <div className="box info-bar">
                            <div> 
                                <Row>
                                    <div className="products-showing"> 
                                        <Col sm={12} md={4}>
                                            Showing <strong>12</strong> of <strong>25</strong> products
                                        </Col>    
                                    </div>

                                    <div className="products-number-sort">
                                        <Col sm={12} md={8}>
                                            <div> 
                                                <Row>
                                                    <form className="form-inline">
                                                        <div> 
                                                            <Col md={6} sm={6}>
                                                                <div className="products-number">
                                                                    <strong>Show</strong>  <a href="category-full.html#" className="btn btn-default btn-sm btn-primary">12</a>  <a href="category-full.html#" className="btn btn-default btn-sm">24</a>  <a href="category-full.html#" className="btn btn-default btn-sm">All</a> products
                                                                </div>
                                                            </Col>    
                                                        </div>
                                                        <div> 
                                                            <Col md={6} sm={6}>
                                                                <div className="products-sort-by">
                                                                    <strong>Sort by</strong>
                                                                    <select name="sort-by" className="form-control">
                                                                        <option>Price</option>
                                                                        <option>Name</option>
                                                                        <option>Sales first</option>
                                                                    </select>
                                                                </div>
                                                            </Col>    
                                                        </div>
                                                    </form>
                                                </Row>    
                                            </div>
                                        </Col>    
                                    </div>
                                </Row>    
                            </div>
                        </div>
                    </Col>    
                </div>
                <div className="row products">

                        <div> 
                            <Col md={3} sm={4}>
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img src="img/product1.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img src="img/product1_2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product1.jpg" alt="" className="img-responsive" />
                                    </a>
                                    <div className="text">
                                        <h3><a href="detail.html">Fur coat with very but very very long name</a></h3>
                                        <p className="price">$143.00</p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-default">View detail</a>
                                            <a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                        </p>
                                    </div>
                                </div>
                            </Col>    
                        </div>

                        <div> 
                            <Col md={3} sm={4}>
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img src="img/product2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img src="img/product2_2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product2.jpg" alt="" className="img-responsive" />
                                    </a>
                                    <div className="text">
                                        <h3><a href="detail.html">White Blouse Armani</a></h3>
                                        <p className="price"><del>$280</del> $143.00</p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-default">View detail</a>
                                            <a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                        </p>
                                    </div>

                                    <div className="ribbon sale">
                                        <div className="theribbon">SALE</div>
                                        <div className="ribbon-background"></div>
                                    </div>

                                    <div className="ribbon new">
                                        <div className="theribbon">NEW</div>
                                        <div className="ribbon-background"></div>
                                    </div>

                                    <div className="ribbon gift">
                                        <div className="theribbon">GIFT</div>
                                        <div className="ribbon-background"></div>
                                    </div>
                                </div>
                            </Col>    
                        </div>

                        <div> 
                            <Col md={3} sm={4}>
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img src="img/product3.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img src="img/product3_2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product3.jpg" alt="" className="img-responsive" />
                                    </a>
                                    <div className="text">
                                        <h3><a href="detail.html">Black Blouse Versace</a></h3>
                                        <p className="price">$143.00</p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-default">View detail</a>
                                            <a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                        </p>

                                    </div>
                                </div>
                            </Col>    
                        </div>

                        <div> 
                            <Col md={3} sm={4}>
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img src="img/product3.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img src="img/product3_2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product3.jpg" alt="" className="img-responsive" />
                                    </a>
                                    <div className="text">
                                        <h3><a href="detail.html">Black Blouse Versace</a></h3>
                                        <p className="price">$143.00</p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-default">View detail</a>
                                            <a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                        </p>

                                    </div>
                                </div>
                            </Col>    
                        </div>

                        <div> 
                            <Col md={3} sm={4}>
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img src="img/product2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img src="img/product2_2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product2.jpg" alt="" className="img-responsive" />
                                    </a>
                                    <div className="text">
                                        <h3><a href="detail.html">White Blouse Versace</a></h3>
                                        <p className="price">$143.00</p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-default">View detail</a>
                                            <a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                        </p>

                                    </div>

                                    <div className="ribbon new">
                                        <div className="theribbon">NEW</div>
                                        <div className="ribbon-background"></div>
                                    </div>
                                </div>
                            </Col>    
                        </div>

                        <div> 
                            <Col md={3} sm={4}>
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img src="img/product1.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img src="img/product1_2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product1.jpg" alt="" className="img-responsive" />
                                    </a>
                                    <div className="text">
                                        <h3><a href="detail.html">Fur coat</a></h3>
                                        <p className="price">$143.00</p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-default">View detail</a>
                                            <a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                        </p>

                                    </div>

                                    <div className="ribbon gift">
                                        <div className="theribbon">GIFT</div>
                                        <div className="ribbon-background"></div>
                                    </div>
                                </div>
                            </Col>    
                        </div>

                        <div> 
                            <Col md={3} sm={4}>
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img src="img/product2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img src="img/product2_2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product2.jpg" alt="" className="img-responsive" />
                                    </a>
                                    <div className="text">
                                        <h3><a href="detail.html">White Blouse Armani</a></h3>
                                        <p className="price"><del>$280</del> $143.00</p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-default">View detail</a>
                                            <a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                        </p>
                                    </div>

                                    <div className="ribbon sale">
                                        <div className="theribbon">SALE</div>
                                        <div className="ribbon-background"></div>
                                    </div>

                                    <div className="ribbon new">
                                        <div className="theribbon">NEW</div>
                                        <div className="ribbon-background"></div>
                                    </div>

                                    <div className="ribbon gift">
                                        <div className="theribbon">GIFT</div>
                                        <div className="ribbon-background"></div>
                                    </div>
                                </div>
                            </Col>    
                        </div>

                        <div> 
                            <Col md={3} sm={4}>
                                <div className="product">
                                    <div className="flip-container">
                                        <div className="flipper">
                                            <div className="front">
                                                <a href="detail.html">
                                                    <img src="img/product3.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                            <div className="back">
                                                <a href="detail.html">
                                                    <img src="img/product3_2.jpg" alt="" className="img-responsive" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="detail.html" className="invisible">
                                        <img src="img/product3.jpg" alt="" className="img-responsive" />
                                    </a>
                                    <div className="text">
                                        <h3><a href="detail.html">Black Blouse Versace</a></h3>
                                        <p className="price">$143.00</p>
                                        <p className="buttons">
                                            <a href="detail.html" className="btn btn-default">View detail</a>
                                            <a href="basket.html" className="btn btn-primary"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                        </p>

                                    </div>
                                </div>
                            </Col>    
                        </div>

                    </div> 
                    <div className="pages">

                        <p className="loadMore">
                            <a href="category-full.html#" className="btn btn-primary btn-lg"><i className="fa fa-chevron-down"></i> Load more</a>
                        </p>

                        <ul className="pagination">
                            <li><a href="category-full.html#">&laquo;</a>
                            </li>
                            <li className="active"><a href="category-full.html#">1</a>
                            </li>
                            <li><a href="category-full.html#">2</a>
                            </li>
                            <li><a href="category-full.html#">3</a>
                            </li>
                            <li><a href="category-full.html#">4</a>
                            </li>
                            <li><a href="category-full.html#">5</a>
                            </li>
                            <li><a href="category-full.html#">&raquo;</a>
                            </li>
                        </ul>
                    </div>


                </div>   
            </div>          
    );
}

export default FullWidthDisplay;