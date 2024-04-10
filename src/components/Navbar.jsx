import { Image } from 'react-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
            <Image src="https://raw.githubusercontent.com/CodeKaito/maggioli-schedamigrazione/main/src/assets/maggioli-cloud.png?token=GHSAT0AAAAAACPKO4CWTQRNCYUCALQA2K2QZQWSBMQ" alt="maggioli-cloud" height={50} width={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Maggioli Cloud</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;