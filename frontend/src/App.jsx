import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductList from './components/ProductList/ProductList';

const App = () => (
  <>
    <Header />
    <main className="py-3">
      <Container>
        <ProductList />
      </Container>
    </main>
    <Footer />
  </>
);

export default App;
