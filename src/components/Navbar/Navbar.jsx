import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import ItemListContainer from '../ItemListContainer/ItemListContainer';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand as={Link} to="/">🧉Matecitos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart" ><CartWidget ></CartWidget>Compras</Nav.Link>
            <Nav.Link  as={Link} to="/categoria/Mates">Mates</Nav.Link>
            <Nav.Link  as={Link} to="/categoria/Termos" > Termos</Nav.Link>
            {/* <NavDropdown title="Otros Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">
                Yerba
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
                Bombillas
            </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
        <Nav>
            {/* <Nav.Link href="#">Extras</Nav.Link>
            <Nav.Link eventKey={2} href="#">
                Precios
            </Nav.Link> */}
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}

export default NavBar;