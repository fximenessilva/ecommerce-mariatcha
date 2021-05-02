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

const App = () => (
  <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/" exact component={ProductList} />
      </Container>
    </main>
    <Footer />
  </Router>
);

export default App;
