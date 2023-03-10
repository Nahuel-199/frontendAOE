import {  
  BrowserRouter,
  Route,
  Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ProductDetails from "./components/productDetails/ProductDetails";
import Products from "./components/products/Products";
import Search from "./components/products/Search";
import Login from "./components/user/Login";
import Profile from "./components/user/profile/Profile";
import UpdateProfile from "./components/user/profile/UpdateProfile";
import UpdatePassword from "./components/user/profile/UpdatePassword";
import ForgotPassword from "./components/user/profile/ForgotPassword";
import ResetPassword from "./components/user/profile/ResetPassword";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";
import OrderSuccess from "./components/cart/OrderSuccess";
import MyOrders from "./components/order/MyOrders";
import OrderDetails from "./components/order/OrderDetails";
import Contact from "./components/contact/Contact";
import NotFound from "./components/layout/notFound/NotFound";
import FailureOrder from "./components/order/FailureOrder";

function App() {

  return (
    <BrowserRouter>

    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/product/:id" element={<ProductDetails />} />

      <Route exact path="/products" element={<Products />} />

      <Route path="/products/:keyword" element={<Products />} />

      <Route exact path="/search" element={<Search />} />

      <Route exact path="/contact" element={<Contact />} />

      <Route exact path="/account" element={<Profile />} />
  
      <Route exact path="/me/update" element={<UpdateProfile />} />

      <Route exact path="/password/update" element={<UpdatePassword />} />

      <Route exact path="/password/forgot" element={<ForgotPassword />} />

      <Route exact path="/password/reset/:token" element={<ResetPassword />} />

      <Route exact path="/login" element={<Login />} />

      <Route exact path="/cart" element={<Cart />} />

      <Route exact path="/shipping" element={<Shipping />} />
       
      <Route exact path="/proccess/payment" element={<Payment />} />
 
      <Route exact path="/order/success" element={<OrderSuccess />} />

      <Route exact path="/orders" element={<MyOrders />} />

      <Route exact path="/order/confirm" element={<ConfirmOrder />} />
     
      <Route exact path="/order/failed" element={<FailureOrder />} />

      <Route exact path="/order/:id" element={<OrderDetails />} />

       <Route path="*" element={<NotFound />} />

    </Routes>

    <Footer />
  </BrowserRouter>
  );
}

export default App;
