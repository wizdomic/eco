import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/homePage/HomePage";
import Cart from "../customer/components/cart/Cart";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/footer/Footer";
import Product from "../customer/components/product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import CheckOut from "../customer/components/checkout/CheckOut";
import Order from "../customer/components/order/Order";
import OrderDetails from "../customer/components/order/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelone/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
