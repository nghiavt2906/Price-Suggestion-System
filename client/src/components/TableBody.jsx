import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import Details from './Details';
import getShippingLabel from '../utils/getShippingLabel';
import getProductConditionLabel from '../utils/getProductConditionLabel';

function TableBody({ data }) {
  const nullCellLabel = 'empty';
  const [rows, setRows] = useState(data);

  const [modalShow, setModalShow] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(-1);

  const handleCloseModal = () => setModalShow(false);
  const handleShowModal = (data) => {
    setModalShow(true);
    setCurrentIdx(data.id);
  };

  useEffect(() => {
    const req = async () => {
      for (const idx in rows) {
        const data = { ...rows[idx] };

        if (data.price === undefined) {
          data.brand_name = data.brand_name ?? '';

          const res = await axios.post(
            `${process.env.REACT_APP_AI_SERVICE_URL}/predict`,
            data,
            { validateStatus: false }
          );

          const newRows = [...rows];
          newRows[idx].id = idx;
          newRows[idx].price = res.data.price.toFixed(3);
          setRows(newRows);
        }
      }
    };

    req();
  }, []);

  return (
    <>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.category_name ?? nullCellLabel}</td>
            <td>{row.brand_name ?? nullCellLabel}</td>
            <td>{getProductConditionLabel(row.item_condition_id)}</td>
            <td>{getShippingLabel(row.shipping)}</td>
            <td>{row.item_description ?? nullCellLabel}</td>
            <td style={{ color: row.price === undefined ? 'white' : 'green' }}>
              {row.price !== undefined ? '$' + row.price : 'pending...'}
            </td>
            <td>
              <Button
                variant="primary"
                type="submit"
                disabled={row.price === undefined ? true : false}
                style={{ width: '6rem' }}
                onClick={() => handleShowModal(row)}
              >
                {row.price === undefined ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    style={{ marginRight: '0.2rem' }}
                  />
                ) : null}
                Details
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <Details
        show={modalShow}
        handleClose={handleCloseModal}
        data={currentIdx >= 0 ? rows[currentIdx] : null}
      />
    </>
  );
}

export default TableBody;
