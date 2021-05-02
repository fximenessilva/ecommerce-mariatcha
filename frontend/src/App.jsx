import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Shipping from './components/Shipping/Shipping';
import Payment from './components/Payment/Payment';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

const App = () => (
  <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route path="/shipping" component={Shipping} />
        <Route path="/payment" component={Payment} />
        <Route path="/placeorder" component={PlaceOrder} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/" exact component={ProductList} />
      </Container>
    </main>
    <Footer />
  </Router>
);

export default App;
