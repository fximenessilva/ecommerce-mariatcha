/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col, Image, ListGroup, Card, Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../Rating/Rating';
import { requestProductDetail } from '../../redux/action/productActions';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();

  const { id } = match.params;

  const productDetail = useSelector((state) => state.productDetailReducer);

  const { loading, error, product } = productDetail;

  useEffect(() => {
    dispatch(requestProductDetail(id));
  }, [dispatch, match]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Voltar
      </Link>
      {loading ? <Loader />
        : error ? <Message variant="danger">{error}</Message>
          : (
            <Row>
              <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h4>{product.name}</h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Price: € {product.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Description: {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Row>
                        <Col>
                          Preço:
                        </Col>
                        <Col>
                          <strong>€{product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>
                          Status:
                        </Col>
                        <Col>
                          {product.countInStock > 0 ? 'Disponivel' : 'Indisponivel'}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button
                        className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}
                      >
                        Adicionar
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          )}

    </>
  );
};

export default ProductDetail;
