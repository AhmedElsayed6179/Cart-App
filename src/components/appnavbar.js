import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { Badge } from "react-bootstrap";

function AppNavbar() {
    const cart = useSelector(state => state.cart);
    return (
        <Navbar expand="lg" fixed="top" bg="white" className="shadow-sm py-2">
            <Container>
                <Link to="/" className="navbar-brand fw-bold text-primary fs-3">
                    CartApp
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Link to="/" className="nav-link fw-medium mx-2 text-dark">
                            Home
                        </Link>
                        <Link to="/products" className="nav-link fw-medium mx-2 text-dark">
                            Products
                        </Link>
                        <Link
                            to="/cart"
                            className="nav-link d-flex align-items-center gap-2 fw-bold position-relative"
                        >
                            🛒 Cart
                            {cart.length > 0 && (
                                <Badge
                                    bg="danger"
                                    pill
                                    className="position-absolute top-0 start-100 translate-middle"
                                    style={{ fontSize: "0.75rem", minWidth: "20px", height: "20px" }}
                                >
                                    {cart.length}
                                </Badge>
                            )}
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;