import React from "react";
import { Image, Table } from "react-bootstrap";

export default function Basic() {
  return (
    <>
    <div className="text-center">
        <h3 className="mt-2">Scheda Migrazione in Cloud</h3>
        <Image
          src="https://raw.githubusercontent.com/CodeKaito/maggioli-schedamigrazione/main/src/assets/maggioli-cloud-hero.png"
          className="mt-3"
          alt="maggioli-cloud-hero"
          height={500}
          width={1000}
        />
      </div>
      <div className="mt-2">
        <h4>Revisioni</h4>
        <Table striped bordered hover className="mt-2">
          <thead>
            <tr>
              <th>Data</th>
              <th>Modifiche</th>
              <th>Versione</th>
              <th>Redatto</th>
              <th>Approvato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2020/10/16</td>
              <td>Prima stesura</td>
              <td>1.1</td>
              <td>U. Bettoni</td>
              <td>U. Bettoni</td>
            </tr>
            <tr>
              <td>2024/03/22</td>
              <td>Seconda stesura</td>
              <td>1.2</td>
              <td>J. Decinco</td>
              <td>U. Bettoni</td>
            </tr>
            <tr>
              <td>2024/05/01</td>
              <td>Terza stesura</td>
              <td>1.3</td>
              <td>J. Decinco</td>
              <td className="text-center">/</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="mt-2">
        <h4>Destinatari</h4>
        <Table striped bordered hover className="mt-2">
          <tbody>
            <tr>
              <th>Profilo</th>
              <th>Sistemisti</th>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
      
  );
}
