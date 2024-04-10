import React from "react";
import { Table } from "react-bootstrap";

const ParteSicraweb = () => {
  return (
    <div className="pagina mt-3">
      <div>
        <h5>Cartella di appoggio</h5>
        <Table bordered hover className="mt-2 text-center">
          <thead>
            <tr>
              <th>Percorso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                    <input type="text" />
                </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h5>VAADIN & GEOSERVER</h5>
        <Table bordered hover className="mt-2 text-center">
          <thead>
            <tr>
              <th>VAADIN</th>
              <th>GEOSERVER</th>
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
      </div>
      <div>
        <h5>Posta</h5>
        <Table bordered hover className="mt-2 text-center">
          <thead>
            <tr>
              <th>Tipologia (IMAP/POP3)</th>
              <th style={{ width: '60%'}}>Indirizzo</th>
              <th>Note</th>
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
            </tr>
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
            </tr>
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
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h5>Firma Digitale</h5>
        <Table bordered hover className="mt-2 text-center">
          <thead>
            <tr>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                    <input type="text" />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" />
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" />
                </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h5>Integrazioni</h5>
        <p>Elencare nella tabella sottostante le integrazioni con sw esterni. Le integrazioni possono avvenire tipicamente in tre modi:</p>
        <ul>
            <li>Web Services Esterni a Maggioli che si integrano con il Sicr@web</li>
            <li>Software Esterni a Maggioli che si integrano con il Sicr@web</li>
            <li>Utenti in lettura-scrittura/sola lettura sul DB sicraweb</li>
            <li>Cartelle condivise ( Ex. Per Fattura Elettronica ) </li>
        </ul>
        <Table bordered hover className="mt-2 text-center">
          <thead>
            <tr>
              <th>Software</th>
              <th>Metodo d'Integrazione</th>
              <th>Software House - Referenti</th>
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
            </tr>
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
            </tr>
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
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h5>Firewall</h5>
        <p>Segnalare la marca del firewall e la tipologia (dedicato/router), ed eventuali annotazioni. (vedi note aggiuntive)</p>
        <Table bordered hover className="mt-2 text-center">
          <thead>
            <tr>
              <th>Firewall</th>
              <th>Tipologia</th>
              <th style={{ width: '50%' }}>Marca</th>
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
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ParteSicraweb;
