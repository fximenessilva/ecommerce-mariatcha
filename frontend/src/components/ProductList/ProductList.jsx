import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductDetail from '../ProductDetail/ProductDetail';
import products from '../../products';

const ProductList = () => (
  <>
    <h1>Latest Products</h1>
    <Row>
      {products.map((product) => (
        <Col sm={12} md={6} lg={4} xl={3}>
          <ProductDetail product={product} />
        </Col>
      ))}
    </Row>
  </>
);

export default ProductList;
