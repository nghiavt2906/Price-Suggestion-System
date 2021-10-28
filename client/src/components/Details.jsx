import React, { useState, useEffect } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import getProductConditionLabel from '../utils/getProductConditionLabel';
import getShippingLabel from '../utils/getShippingLabel';
import ProgressBar from '@ramonak/react-progress-bar';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function Details({ show, handleClose, data }) {
  const rgbToHex = (r, g, b) =>
    '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  const percentToRGB = (percent) => {
    const redAndGreen = (512 * percent) / 100;
    return redAndGreen > 255
      ? [2 * 255 - redAndGreen, 255, 0]
      : [255, redAndGreen, 0];
  };

  const [cosineRows, setCosineRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const main = async () => {
      if (!data) return;

      data.brand_name = data.brand_name ?? '';
      data.item_description = data.item_description ?? '';

      const res = await axios.post(
        `${process.env.REACT_APP_COSINE_SIMILARITY_SERVICE_URL}/compare`,
        data,
        { validateStatus: false }
      );

      setCosineRows(res.data);
      setIsLoading(false);
    };

    main();
  }, [data]);

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
              <b>Brand:</b>{' '}
              {data.brand_name === undefined || data.brand_name === ''
                ? 'empty'
                : data.brand_name}
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

        <hr />
        <div className="mt-4">
          <h4>Similar Products</h4>
        </div>

        <Table
          striped
          bordered
          hover
          variant="dark"
          className="mt-3"
          style={{
            overflow: 'auto',
            display: 'block',
            height: isLoading ? '0' : '32rem',
            width: '100%',
          }}
        >
          <thead>
            <tr>
              <th>Product name</th>
              <th>Category name</th>
              <th>Brand</th>
              <th>Condition</th>
              <th>Shipping</th>
              <th>Description</th>
              <th>Price</th>
              <th>Similarity (%)</th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? null
              : cosineRows.map((row) => (
                  <tr key={uuidv4()}>
                    <td>{row.name}</td>
                    <td>{row.category_name ?? 'empty'}</td>
                    <td>{row.brand_name ?? 'empty'}</td>
                    <td>{getProductConditionLabel(row.item_condition_id)}</td>
                    <td>{getShippingLabel(row.shipping)}</td>
                    <td>{row.item_description ?? 'empty'}</td>
                    <td style={{ color: 'green' }}>
                      <b>{'$' + row.price}</b>
                    </td>
                    <td style={{ width: '12%' }}>
                      <ProgressBar
                        completed={(row.similarity * 100).toFixed(2)}
                        bgColor={rgbToHex(
                          ...percentToRGB((row.similarity * 100).toFixed(2))
                        )}
                        labelAlignment="outside"
                      />
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
        {isLoading ? (
          <img
            src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif"
            style={{
              width: '50%',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            alt="Loading..."
          />
        ) : null}
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
