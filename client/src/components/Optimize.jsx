import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Optimize() {
  return (
    <Container className="mt-3">
      <h3>Price suggestion panel</h3>

      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Product name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Category">
          <Form.Label>Category name</Form.Label>
          <Form.Select aria-label="Floating label select example">
            <option>none category</option>
            <option value="1">Men/Tops/T-shirts</option>
            <option value="2">
              Electronics/Computers & Tablets/Components & Parts
            </option>
            <option value="3">Women/Tops & Blouses/Blouse</option>
            <option value="4">Home/Home Décor/Home Décor Accents</option>
            <option value="5">Women/Jewelry/Necklaces</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="productCondition">
          <Form.Label>Product condition</Form.Label>
          <Form.Select aria-label="Floating label select example">
            <option>none condition</option>
            <option value="1">Very bad</option>
            <option value="2">Bad</option>
            <option value="3">New</option>
            <option value="4">Good</option>
            <option value="5">Very good</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Optimize;
