import React from "react";
import { Table, Form } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';

const ParteServer = () => {
  return (
    <div className="pagina">
      <div>
        <h5>Repository e Path non vanilla</h5>
        <Table bordered className="text-center">
          <thead>
            <tr>
              <th style={{ width: '90%'}}>Percorso</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h5>Database/Export del db</h5>
        <Table bordered className="text-center">
          <thead>
            <tr>
              <th style={{ width: '90%'}}>Percorso</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
              <Form.Control as="textarea" className="parteserver text-center" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h5>Utenti del database</h5>
        <Form.Control as="textarea" rows={10} cols={10} />
      </div>
    </div>
  );
};

export default ParteServer;