import React from "react";
import { Form, Table } from "react-bootstrap";

const ParteNote = () => {
  return (
    <div className="mt-5 pagina">
      <div>
        <h5>Note Aggiuntive</h5>
        <Form.Control as="textarea" rows={10} cols={20} />
      </div>
      <div className="mt-2">
        <h5>Connettivitá</h5>
        <p>
          Verificare la banca a disposizione verso la piattaforma cloud scelta
          ed il numero di client dell'ente
        </p>
        <Table bordered className="mt-2 text-center">
          <tbody>
            <tr>
              <td>
                <th style={{ width: '70%'}}>Numero di client mediamente attivi in contemporanea dell'ente</th>
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      
    </div>
  );
};

export default ParteNote;
