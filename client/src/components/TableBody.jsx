import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

function TableBody({ data }) {
  const nullCellLabel = 'empty';
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(data);
  }, [data]);

  console.log(rows, data);

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
          newRows[idx].price = res.data.price.toFixed(3);
          setRows(newRows);
        }
      }
    };

    req();
  });

  return (
    <tbody>
      {rows.map((row) => (
        <tr>
          <td>{row.name}</td>
          <td>{row.category_name ?? nullCellLabel}</td>
          <td>{row.brand_name ?? nullCellLabel}</td>
          <td>{row.item_condition_id}</td>
          <td>{row.shipping}</td>
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
  );
}

export default TableBody;