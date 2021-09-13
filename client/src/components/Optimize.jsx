import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Optimize() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, brand, category, condition, shipping, description };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_END_POINT}/api/product/suggestPrice`,
        data,
        { validateStatus: false }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mt-3">
      <h3>Price suggestion panel</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="brand">
          <Form.Label>Brand name</Form.Label>
          <Form.Select onChange={(e) => setBrand(e.target.value)}>
            <option>none brand</option>
            <option value="Razer">Razer</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="OEM">OEM</option>
            <option value="Sony">Sony</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category name</Form.Label>
          <Form.Select onChange={(e) => setCategory(e.target.value)}>
            <option>none category</option>
            <option value="Men/Tops/T-shirts">Men/Tops/T-shirts</option>
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
          <Form.Select onChange={(e) => setCondition(e.target.value)}>
            <option>none condition</option>
            <option value="1">Very bad</option>
            <option value="2">Bad</option>
            <option value="3">New</option>
            <option value="4">Good</option>
            <option value="5">Very good</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="shipping">
          <Form.Label>Shipping method</Form.Label>
          <Form.Select onChange={(e) => setShipping(e.target.value)}>
            <option>none shipping</option>
            <option value="0">Free (paid by seller)</option>
            <option value="1">Paid</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Product description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Product description"
            style={{ height: '100px' }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Optimize;
