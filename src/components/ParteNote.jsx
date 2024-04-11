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
      <div className="mt-2">
        <h5>IP Pubblico Sedi Comunali da abilitare</h5>
        <Table bordered hover className="mt-2">
          <thead>
            <tr>
              <th className="text-center">Sede</th>
              <th className="text-center">IP Pubblico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">Sede Principale</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="mt-2">
        <h5>Speedtest per cloud Maggioli</h5>
        <Table bordered hover className="mt-2">
          <thead>
            <tr>
              <th></th>
              <th className="text-center">Download (Mb/s)</th>
              <th className="text-center">Upload (Mb/s)</th>
              <th className="text-center">Ping (ms)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">Speedazure.maggiolicloud.it</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td className="text-center">Speedtest.maggiolicloud.it</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td className="text-center">Speedelogic.maggiolicloud.it</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
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
