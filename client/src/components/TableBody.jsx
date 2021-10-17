import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

function TableBody({ data }) {
  const nullCellLabel = 'empty';

  return (
    <tbody>
      {data.map((row) => (
        <tr>
          <td>{row.name}</td>
          <td>{row.category_name ?? nullCellLabel}</td>
          <td>{row.brand_name ?? nullCellLabel}</td>
          <td>{row.item_condition_id}</td>
          <td>{row.shipping}</td>
          <td>{row.item_description ?? nullCellLabel}</td>
          <td>pending</td>
          <td>
            <Button
              variant="primary"
              type="submit"
              disabled="true"
              style={{ width: '6rem' }}
            >
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                style={{ marginRight: '0.2rem' }}
              />
              Details
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
