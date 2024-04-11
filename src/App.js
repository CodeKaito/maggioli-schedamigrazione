import { Container } from 'react-bootstrap';
import './App.css';
import Hero from './components/Hero';
import Moduli from './components/Moduli';
import Navbar from './components/Navbar';
import ParteConfigurazione from './components/ParteConfigurazione';
import ParteServer from './components/ParteServer';
import ParteSicraweb from './components/ParteSicraweb';
import ParteWebService from './components/ParteWebService';
import ParteNote from './components/ParteNote';
import Redazione from './components/Redazione';

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Hero />
      <Moduli />
      <ParteConfigurazione />
      <ParteServer />
      <ParteSicraweb />
      <ParteWebService />
      <ParteNote />
      <Redazione />
    </Container>
  );
}

export default App;
