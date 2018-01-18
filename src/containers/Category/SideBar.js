import React from 'react';
import { Col } from 'react-bootstrap';
import BannerImage from '../PagesAndBlog/BannerImage';

const SideBar = () => {
    return(
                <div>     
                    <Col md={3}>
                        <div className="panel panel-default sidebar-menu">

                            <div className="panel-heading">
                                <h3 className="panel-title">Categories</h3>
                            </div>

                            <div className="panel-body">
                                <ul className="nav nav-pills nav-stacked category-menu">
                                    <li>
                                        <a href="category.html">Men <span className="badge pull-right">42</span></a>
                                        <ul>
                                            <li><a href="category.html">T-shirts</a>
                                            </li>
                                            <li><a href="category.html">Shirts</a>
                                            </li>
                                            <li><a href="category.html">Pants</a>
                                            </li>
                                            <li><a href="category.html">Accessories</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="active">
                                        <a href="category.html">Ladies  <span className="badge pull-right">123</span></a>
                                        <ul>
                                            <li><a href="category.html">T-shirts</a>
                                            </li>
                                            <li><a href="category.html">Skirts</a>
                                            </li>
                                            <li><a href="category.html">Pants</a>
                                            </li>
                                            <li><a href="category.html">Accessories</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="category.html">Kids  <span className="badge pull-right">11</span></a>
                                        <ul>
                                            <li><a href="category.html">T-shirts</a>
                                            </li>
                                            <li><a href="category.html">Skirts</a>
                                            </li>
                                            <li><a href="category.html">Pants</a>
                                            </li>
                                            <li><a href="category.html">Accessories</a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div className="panel panel-default sidebar-menu">

                            <div className="panel-heading">
                                <h3 className="panel-title">Brands <a className="btn btn-xs btn-danger pull-right" href="category.html#"><i className="fa fa-times-circle"></i> Clear</a></h3>
                            </div>

                            <div className="panel-body">

                                <form>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />Armani (10)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />Versace (12)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />Carlo Bruni (15)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />Jack Honey (14)
                                            </label>
                                        </div>
                                    </div>

                                    <button className="btn btn-default btn-sm btn-primary"><i className="fa fa-pencil"></i> Apply</button>

                                </form>

                            </div>
                        </div>

                        <div className="panel panel-default sidebar-menu">

                            <div className="panel-heading">
                                <h3 className="panel-title">Colours <a className="btn btn-xs btn-danger pull-right" href="category.html#"><i className="fa fa-times-circle"></i> Clear</a></h3>
                            </div>

                            <div className="panel-body">

                                <form>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> <span className="colour white"></span> White (14)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> <span className="colour blue"></span> Blue (10)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> <span className="colour green"></span> Green (20)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> <span className="colour yellow"></span> Yellow (13)
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> <span className="colour red"></span> Red (10)
                                            </label>
                                        </div>
                                    </div>

                                    <button className="btn btn-default btn-sm btn-primary"><i className="fa fa-pencil"></i> Apply</button>

                                </form>

                            </div>
                        </div>
                        <BannerImage />
                    </Col>    
            </div>       
    );
}

export default SideBar;