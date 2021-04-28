import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';

const App = () => (
  <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:id" component={ProductDetail} />
      </Container>
    </main>
    <Footer />
  </Router>
);

export default App;
