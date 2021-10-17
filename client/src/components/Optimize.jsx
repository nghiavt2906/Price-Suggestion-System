import React, { useState } from 'react';
import { Container, Form, Button, Spinner, Table } from 'react-bootstrap';
import axios from 'axios';

function Optimize() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      brand_name: brand,
      category_name: category,
      item_condition_id: parseInt(condition),
      shipping: parseInt(shipping),
      item_description: description,
    };
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_AI_SERVICE_URL}/predict`,
        data,
        { validateStatus: false }
      );
      setPrice(res.data.price.toFixed(3));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mt-3 px-3 py-3">
      <h3>Price suggestion panel</h3>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Category name</th>
            <th>Brand</th>
            <th>Condition</th>
            <th>Shipping</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Optimize;
