/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({
  step1, step2, step3, step4,
}) => (
  <Nav className="justify-content-center mb-4">
    <Nav.Item>
      {step1 ? (
        <LinkContainer to="/login">
          <Nav.Link>
            Entrar
          </Nav.Link>
        </LinkContainer>
      ) : <Nav.Link disabled>Entrar</Nav.Link>}
    </Nav.Item>

    <Nav.Item>
      {step2 ? (
        <LinkContainer to="/shipping">
          <Nav.Link>
            Envío
          </Nav.Link>
        </LinkContainer>
      ) : <Nav.Link disabled>Envío</Nav.Link>}
    </Nav.Item>

    <Nav.Item>
      {step3 ? (
        <LinkContainer to="/payment">
          <Nav.Link>
            Pagamento
          </Nav.Link>
        </LinkContainer>
      ) : <Nav.Link disabled>Pagamento</Nav.Link>}
    </Nav.Item>

    <Nav.Item>
      {step4 ? (
        <LinkContainer to="/placeorder">
          <Nav.Link>
            Pedido
          </Nav.Link>
        </LinkContainer>
      ) : <Nav.Link disabled>Pedido</Nav.Link>}
    </Nav.Item>
  </Nav>
);

export default CheckoutSteps;
