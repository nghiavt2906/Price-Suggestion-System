import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function Details({ show, handleClose, data }) {
  console.log(data);
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'black' }}>Product Details</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: 'black' }}>
        {data !== null && (
          <>
            <h4>{data.name}</h4>
            <span>
              <b>Category:</b> {data.category_name}
            </span>{' '}
            <br />
            <span>
              <b>Brand:</b> {data.brand_name ?? 'empty'}
            </span>{' '}
            <br />
            <span>
              <b>Condition:</b> {data.item_condition_id}
            </span>{' '}
            <br />
            <span>
              <b>Shipping:</b> {data.shipping}
            </span>{' '}
            <br />
            <span>
              <b>Description:</b> {data.item_description}
            </span>
          </>
        )}
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
