import React, { useState, useRef } from 'react';
import { Container, Table } from 'react-bootstrap';
import XLSX from 'xlsx';
import TableBody from './TableBody';

function Optimize() {
  const formFileRef = useRef(null);

  const [data, setData] = useState([]);

  const handleUpload = () => {
    let file = formFileRef.current.files[0];

    let reader = new FileReader();

    reader.onload = function (e) {
      let data = e.target.result;
      let workbook = XLSX.read(data, {
        type: 'binary',
      });

      workbook.SheetNames.forEach(function (sheetName) {
        let data = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetName]
        );

        setData(data);
      });
    };

    reader.onerror = (e) => {
      console.log(e);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <Container className="mt-3 px-3 py-3">
      <h3>Price suggestion panel</h3>

      <form className="my-3">
        <div className="row mb-1">
          <div className="col-md-4">
            <input className="form-control" type="file" ref={formFileRef} />
          </div>

          <div
            className="col-md-2"
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'flex-end',
            }}
          >
            <div className="btn btn-primary" id="upload" onClick={handleUpload}>
              Upload
            </div>
          </div>
        </div>
      </form>

      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{
          overflow: 'auto',
          display: 'block',
          height: '32rem',
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
            <th>Actions</th>
          </tr>
        </thead>
        <TableBody data={data}></TableBody>
      </Table>
    </Container>
  );
}

export default Optimize;
