import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function Details({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'black' }}>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: 'black' }}>
        Woohoo, you're reading this text in a modal!
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
