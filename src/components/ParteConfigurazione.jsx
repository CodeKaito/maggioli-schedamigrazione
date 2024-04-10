import React from "react";
import { Table } from "react-bootstrap";

const ParteConfigurazione = () => {
  return (
    <div className="mt-5 pagina">
      <h5>Tipologia di Sistema Operativo</h5>
      <Table bordered className="mt-2 text-center">
        <thead>
          <tr>
            <th>Windows</th>
            <th>Linux</th>
          </tr>
        </thead>
        <tbody>
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
      <h5>Tipologia di Collegamento: (Username & Password su ITGlue)</h5>
      <Table bordered className="mt-2 text-center">
        <thead>
          <tr>
            <th></th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>É in FARM Maggioli?</td>
            <td>
              <input type="text" placeholder="No" />
            </td>
          </tr>
          <tr>
            <td>SSH</td>
            <td>
              <input type="text" placeholder="/" />
            </td>
          </tr>
          <tr>
            <td>VNC</td>
            <td>
              <input type="text" placeholder="/" />
            </td>
          </tr>
          <tr>
            <td>ANYDESK</td>
            <td>
              <input type="text" placeholder="/" />
            </td>
          </tr>
          <tr>
            <td>LOGMEIN</td>
            <td>
              <input type="text" placeholder="Con Operatore:" />
            </td>
          </tr>
          <tr>
            <td>VPN</td>
            <td>
              <input type="text" placeholder="/" />
            </td>
          </tr>
        </tbody>
      </Table>
      <h5>Contatto Primario:</h5>
      <Table bordered className="mt-2 text-center">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Numero</th>
            <th>Tipologia</th>
            <th>Esterno?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
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
      <h5>Contatto Secondario:</h5>
      <Table bordered className="mt-2 text-center">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Numero</th>
            <th>Tipologia</th>
            <th>Esterno?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
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
  );
};

export default ParteConfigurazione;
