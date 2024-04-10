import { Container } from 'react-bootstrap';
import './App.css';
import Hero from './components/Hero';
import Moduli from './components/Moduli';
import Navbar from './components/Navbar';
import ParteConfigurazione from './components/ParteConfigurazione';
import ParteServer from './components/ParteServer';

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Hero />
      <Moduli />
      <ParteConfigurazione />
      <ParteServer />
    </Container>
  );
}

export default App;
