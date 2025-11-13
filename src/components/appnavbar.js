import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { Badge } from "react-bootstrap";

function AppNavbar() {
    const cart = useSelector(state => state.cart);
    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/" className='navbar-brand'>CartApp</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/products" className='nav-link'>Products</Link>
                        <Link to="/cart" className="nav-link d-flex align-items-center gap-2 fw-bold">
                            🛒 Cart
                            <Badge
                                bg="primary"
                                className="rounded-pill px-2 py-1"
                                style={{ minWidth: "24px", textAlign: "center", fontWeight: "500" }}
                            >
                                {cart.length}
                            </Badge>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;