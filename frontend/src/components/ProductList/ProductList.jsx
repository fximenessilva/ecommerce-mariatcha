/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import { requestProducts } from '../../redux/action/productActions';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';

const ProductList = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productReducer);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(requestProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? <Loader />
        : error ? <Message variant="danger">{error}</Message>
          : (
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}

    </>

  );
};

export default ProductList;
