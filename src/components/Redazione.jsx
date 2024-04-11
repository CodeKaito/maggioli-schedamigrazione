import React from "react";
import { Table } from "react-bootstrap";

const Redazione = () => {
  return (
    <div className="pagina">
        <div className="mt-2">
          <h5>Redazione</h5>
          <Table bordered className="mt-2">
          <thead>
            <tr>
              <th>Redatto da:</th>
              <th style={{ width: '70%'}}>
                <input type="text" />
              </th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>
                  <th>Data:</th>
                </td>
                <td>
                  <input type="date" />
                </td>
              </tr>
            </tbody>
          </Table>
      </div>
    </div>
  );
};

export default Redazione;
