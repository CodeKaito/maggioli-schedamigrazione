import { Image } from 'react-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
            <Image src="https://raw.githubusercontent.com/CodeKaito/maggioli-schedamigrazione/main/src/assets/maggioli-cloud.png" alt="maggioli-cloud" height={50} width={50} />
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Maggioli Cloud</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;