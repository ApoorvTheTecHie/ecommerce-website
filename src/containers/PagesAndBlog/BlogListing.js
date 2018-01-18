import React from 'react';
import { Col } from 'react-bootstrap';
import BlogSideNav from './BlogSideNav';

const BlogListing = () => {
    return(
    <div id="content">
        <div className="container">

                <div> 
                    <Col sm={12}>
                        <ul className="breadcrumb">

                            <li><a href="index.html">Home</a>
                            </li>
                            <li>Blog listing</li>
                        </ul>
                    </Col>    
                </div>
            <div id="blog-listing"> 
                <Col sm={9}>

                    <ul className="breadcrumb">

                        <li><a href="blog.html#">Home</a>
                        </li>
                        <li>Blog listing</li>
                    </ul>


                    <div className="box">

                        <h1>Blog category name</h1>
                        <p>Pellentesque habitant morbi tristique 
                            senectus et netus et malesuada fames 
                            ac turpis egestas. Vestibulum tortor 
                            quam, feugiat vitae, ultricies eget, 
                            tempor sit amet, ante. Donec eu libero 
                            sit amet quam egestas semper.
                        </p>

                    </div>

                    <div className="post">
                        <h2><a href="post.html">Fashion now</a></h2>
                        <p className="author-category">By <a href="blog.html#">John Slim</a> in <a href="blog.html">Fashion and style</a>
                        </p>
                        <hr />
                        <p className="date-comments">
                            <a href="post.html"><i className="fa fa-calendar-o"></i> June 20, 2013</a>
                            <a href="post.html"><i className="fa fa-comment-o"></i> 8 Comments</a>
                        </p>
                        <div className="image">
                            <a href="post.html">
                                <img src="img/blog2.jpg" className="img-responsive" alt="Example blog post alt" />
                            </a>
                        </div>
                        <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies
                            mi vitae est. Mauris placerat eleifend leo.</p>
                        <p className="read-more"><a href="post.html" className="btn btn-primary">Continue reading</a>
                        </p>
                    </div>


                    <div className="post">
                        <h2><a href="post.html">Who is who - example blog post</a></h2>
                        <p className="author-category">By <a href="blog.html#">John Slim</a> in <a href="blog.html">About Minimal</a>
                        </p>
                        <hr />
                        <p className="date-comments">
                            <a href="post.html"><i className="fa fa-calendar-o"></i> June 20, 2013</a>
                            <a href="post.html"><i className="fa fa-comment-o"></i> 8 Comments</a>
                        </p>
                        <div className="image">
                            <a href="post.html">
                                <img src="img/blog.jpg" className="img-responsive" alt="Example blog post alt" />
                            </a>
                        </div>
                        <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies
                            mi vitae est. Mauris placerat eleifend leo.</p>
                        <p className="read-more"><a href="post.html" className="btn btn-primary">Continue reading</a>
                        </p>
                    </div>

                    <ul className="pager">
                        <li className="previous"><a href="blog.html#">&larr; Older</a>
                        </li>
                        <li className="next disabled"><a href="blog.html#">Newer &rarr;</a>
                        </li>
                    </ul>
                </Col>    
            </div>
            <div>
                <BlogSideNav />
            </div>
        </div>    
    </div>
    );
}

export default BlogListing;