import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './CartWidget';
const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="#home">🧉Matecitos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link  href="#"><Cart valor='0 '></Cart>Compras</Nav.Link>
            <Nav.Link href="#">Mates</Nav.Link>
            <Nav.Link href="#"> Termos</Nav.Link>
            <NavDropdown title="Otros Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">
                Yerba
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
                Bombillas
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link href="#">Extras</Nav.Link>
            <Nav.Link eventKey={2} href="#">
                Precios
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}

export default NavBar;