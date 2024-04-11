import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Moduli = () => {
  const [comune, setComune] = useState('');

  useEffect(() => {
    localStorage.setItem('comune', comune);
  }, [comune]);

  useEffect(() => {
    const savedComune = localStorage.getItem('comune');
    if (savedComune) {
      setComune(savedComune);
    }
  }, []);

  const handleComuneChange = (e) => {
    setComune(e.target.value);
  };

  return (
    <div className='mt-5'>
      <h5>Introduzione</h5>
      <div>
        <p>Questo documento ha lo scopo di raccogliere tutte le informazioni necessarie alla migrazione di un ente da installazione On-PREMISE al Cloud Maggioli o di Terzi.       Permette anche di avere un memorandum delle verifiche necessarie al fine di eseguire l’attività in modo completo e senza trascurare eventuali integrazioni che l’ente possa avere.
        </p>
      </div>
      <h5 className='mt-5'>Ente da migrare</h5>
      <Table bordered className="mt-2 text-center">
        <thead>
          <tr>
            <th>Nome Comune</th>
            <th>Abitanti</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
              />
            </td>
            <td>
              <input
                type="text"
                value={comune}
                onChange={handleComuneChange}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <h5>Software Maggioli Attivi</h5>
      <div>
        <p>Indicare nella tabella sottostante tutti i Software ed i moduli Maggioli che l’ente possiede.
            Per ogni software va indicato il referente con cui si è preso contatto per valutare la fattibilità della migrazione e le azioni necessarie per consentire l’integrazione degli applicativi una volta che S@w sarà spostato sul cloud.
        </p>
        <Table bordered className="mt-2 text-center">
        <thead>
          <tr>
            <th className='moduli'>Software</th>
            <th className='moduli'>Moduli</th>
            <th className='moduli'>Attivo</th>
            <th className='moduli'>In Elab.</th>
            <th className='moduli'>Inviato</th>
            <th className='moduli'>Non prev.</th>
            <th className='moduli'>Non in reg.</th>
            <th className='moduli'>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={15} style={{ verticalAlign: 'middle' }}>S@W</td>
            <td className='moduli'>J-Iride</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Serfin</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Serfin</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Demos</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Smart</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Suap</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Com</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Com</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Aut</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Trib</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Cim</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>E-Pers</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-Pers</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>X-Pers</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>J-PA</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
        </tbody>
        </Table>
        <Table bordered className="mt-2 text-center">
        <thead>
          <tr>
            <th className='moduli'>NON Sicr@Web</th>
            <th className='moduli'>Attivo</th>
            <th className='moduli'>In Elab.</th>
            <th className='moduli'>Inviato</th>
            <th className='moduli'>Non prev.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='moduli'>E-Procurement</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>Concilia</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>Icaro</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>Paghe e presenze</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>JCity-Gov</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>Aol</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>Municipium(APP-IO)</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>Sportello Telematico(GLOBO)</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>PAGOPA</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td className='moduli'>Kronos</td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
        </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Moduli;
