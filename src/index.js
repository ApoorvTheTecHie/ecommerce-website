import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './containers/Home/TopBar';
import NavBar from './containers/Home/NavBar';
import ImageSlider from './containers/Home/ImageSlider';
import AdvantagesSlider from './containers/Home/AdvantagesSlider';
import './index.css';
import GetInspired from './containers/Home/GetInspired';
import WeekSlider from './containers/Home/WeekSlider';
import FromOurBlog from './containers/Home/FromOurBlog';
// import Register from './containers/Register/Register';
// import CustomerOrders from './containers/OrderHistory/CustomerOrders';
// import OrderHistoryDetail from './containers/OrderHistory/OrderHistoryDetail';
// import CustomerWishList from './containers/OrderHistory/CustomerWishList';
// import CustomerAccount from './containers/OrderHistory/CustomerAccount';
// import ShoppingCart from './containers/OrderProcess/ShoppingCart';
// import CheckOutOne from './containers/OrderProcess/CheckOutOne';
// import OrderSummary from './containers/OrderProcess/OrderSummary';
import Footer from './containers/Home/Footer';
import Copyright from './containers/Home/Copyright';
import ColorButton from './containers/Home/ColorButton';
// import CheckOutTwo from './containers/OrderProcess/CheckOutTwo';
// import CheckOutThree from './containers/OrderProcess/CheckOutThree';
// import CheckOutFour from './containers/OrderProcess/CheckOutFour';
// import BlogListing from './containers/PagesAndBlog/BlogListing';
// import BlogPost from './containers/PagesAndBlog/BlogPost';
// import PagesSideNav from './containers/PagesAndBlog/PagesSideNav';
// import FaqPage from './containers/PagesAndBlog/FaqPage';
// import TextPage from './containers/PagesAndBlog/TextPage';
// import PageNotFound from './containers/PagesAndBlog/PageNotFound';
// import ContactPage from './containers/PagesAndBlog/ContactPage';
// import SideBar from './containers/Category/SideBar';
// import FullWidthDisplay from './containers/Category/FullWidthDisplay';
// import ProductDetail from './containers/Category/ProductDetail';
import CategoryDisplayLeft from './containers/Category/CategoryDisplayLeft';
 


ReactDOM.render(
		<div>
			<TopBar />
			<NavBar />
			<div id="all">
				<div id="content">
					{/* <Register /> */}
					{/* <ImageSlider />
					<AdvantagesSlider />
					<WeekSlider />
					<GetInspired />
					<FromOurBlog /> */}
					{/* <CustomerMenu /> */}
					{/* <OrderHistoryDetail /> */}
					{/* <CustomerWishList /> */}
					{/* <CustomerAccount /> */}
					{/* <ShoppingCart /> */}
					{/* <CheckOutOne /> */}
					{/* <OrderSummary /> */}
					{/* <CheckOutTwo /> */}
					{/* <CheckOutThree /> */}
					{/* <CheckOutFour /> */}
					{/* <BlogListing /> */}
					{/* <BlogPost /> */}
					{/* <PagesSideNav /> */}
					{/* <FaqPage /> */}
					{/* <TextPage /> */}
					{/* <PageNotFound /> */}
					{/* <ContactPage /> */}
					{/* <SideBar /> */}
					{/* <FullWidthDisplay /> */}
					{/* <ProductDetail /> */}
					<CategoryDisplayLeft />
				</div>	
				<Footer />
				<Copyright />
				<ColorButton />
			</div>	
		</div>,
		document.getElementById('root')
	);