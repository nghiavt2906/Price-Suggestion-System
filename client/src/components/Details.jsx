import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import getProductConditionLabel from '../utils/getProductConditionLabel';
import getShippingLabel from '../utils/getShippingLabel';

function Details({ show, handleClose, data }) {
  console.log(data);
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'black' }}>Product Details</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: 'black' }}>
        {data !== null && (
          <>
            <h4>{data.name}</h4>
            <span>
              <b>Category:</b> {data.category_name ?? 'empty'}
            </span>{' '}
            <br />
            <span>
              <b>Brand:</b> {data.brand_name ?? 'empty'}
            </span>{' '}
            <br />
            <span>
              <b>Condition:</b>{' '}
              {getProductConditionLabel(data.item_condition_id)}
            </span>{' '}
            <br />
            <span>
              <b>Shipping:</b> {getShippingLabel(data.shipping)}
            </span>{' '}
            <br />
            <span>
              <b>Description:</b> {data.item_description}
            </span>{' '}
            <br />
            <span>
              <h4 style={{ display: 'inline' }}>Predicted price: </h4>
              <b style={{ fontSize: '1.5rem', color: 'green' }}>
                ${data.price}
              </b>
            </span>
          </>
        )}

        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Category name</th>
              <th>Brand</th>
              <th>Condition</th>
              <th>Shipping</th>
              <th>Description</th>
              <th>Price</th>
              <th>Similarity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Floral Kimono</td>
              <td>Women/Sweaters/Cardigan</td>
              <td>Vintage</td>
              <td>{getProductConditionLabel(4)}</td>
              <td>{getShippingLabel(1)}</td>
              <td>
                floral kimono -never worn -lightweight and perfect for hot
                weather
              </td>
              <td>9.463</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Details;
