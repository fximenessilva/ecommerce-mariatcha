import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <>
    <Header />
    <main className="py-3">
      <Container>
        <h1>olaa</h1>
      </Container>
    </main>
    <Footer />
  </>
);

export default App;
