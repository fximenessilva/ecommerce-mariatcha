/* eslint-disable no-underscore-dangle */
/* eslint-disable no-lonely-if */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';
import { getUserDetail, updateUserProfile } from '../../redux/action/userActions';

const Profile = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userDetailReducer);
  const { loading, error, user } = userDetail;

  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUserUpdateProfileReducer);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetail('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Password não corresponde');
    } else {
      dispatch(updateUserProfile({
        id: user._id, name, email, password,
      }));
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h2>Perfil</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Perfil atualizado</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="name"
              placeholder="Introduza o nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Introduza o email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Introduza a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirmar password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme a password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Atualizar
          </Button>

        </Form>
      </Col>

      <Col md={9}>
        <h2>Meus pedidos</h2>
      </Col>
    </Row>

  );
};

export default Profile;
