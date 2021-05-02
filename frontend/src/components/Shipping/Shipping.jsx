/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../FormContainer/FormContainer';
import { saveShippingAddress } from '../../redux/action/cartActions';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';

const Shipping = ({ history }) => {
  const cart = useSelector((state) => state.cartReducer);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [address, setAddress] = useState(shippingAddress?.address);
  const [city, setCity] = useState(shippingAddress?.city);
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode);
  const [country, setCountry] = useState(shippingAddress?.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({
      address, city, postalCode, country,
    }));
    history.push('/payment');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Morada</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduza a morada"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>Cidade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduza a cidade"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Código Postal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduza o código postal"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduza o país"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>

        <Button
          type="submit"
          variant="primary"
        >
          Continuar
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Shipping;
