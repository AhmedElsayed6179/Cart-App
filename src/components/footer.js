import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
                        <p className="mb-0">&copy; {new Date().getFullYear()} CartApp. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <p className="mb-0">Website created by <span className="fw-bold">Ahmed Mohamed</span></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
