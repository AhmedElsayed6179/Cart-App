import { Container, Row, Col, Card, Button } from "react-bootstrap";

function WhyUseOurSite() {
    return (
        <Container fluid className="py-5 mt-5" style={{ backgroundColor: "#f8f9fa" }}>
            <h2 className="text-center fw-bold mb-5 display-5">
                Why Choose <span className="text-primary">CartApp?</span> 🤩
            </h2>

            <Row className="g-4 justify-content-center">
                {/* Feature 1 */}
                <Col md={6} lg={4}>
                    <Card className="h-100 text-center border-0 rounded-4 p-4 shadow-sm hover-zoom" style={{ backgroundColor: "#e0f7fa" }}>
                        <i className="bi bi-speedometer2 display-3 text-primary mb-3"></i>
                        <Card.Title className="fw-bold mb-3">Fast & Intuitive</Card.Title>
                        <Card.Text className="text-dark mb-3">
                            Navigate our website effortlessly, find products in seconds, and add them to your cart with a single click.
                        </Card.Text>
                        <Button variant="primary" size="sm">Learn More</Button>
                    </Card>
                </Col>

                {/* Feature 2 */}
                <Col md={6} lg={4}>
                    <Card className="h-100 text-center border-0 rounded-4 p-4 shadow-sm hover-zoom" style={{ backgroundColor: "#e8f5e9" }}>
                        <i className="bi bi-shield-lock-fill display-3 text-success mb-3"></i>
                        <Card.Title className="fw-bold mb-3">Secure & Reliable</Card.Title>
                        <Card.Text className="text-dark mb-3">
                            All your personal and payment information is fully protected using advanced encryption and security protocols.
                        </Card.Text>
                        <Button variant="success" size="sm">Learn More</Button>
                    </Card>
                </Col>

                {/* Feature 3 */}
                <Col md={6} lg={4}>
                    <Card className="h-100 text-center border-0 rounded-4 p-4 shadow-sm hover-zoom" style={{ backgroundColor: "#fff3e0" }}>
                        <i className="bi bi-truck display-3 text-warning mb-3"></i>
                        <Card.Title className="fw-bold mb-3">Fast Delivery</Card.Title>
                        <Card.Text className="text-dark mb-3">
                            Get your products delivered quickly and track your orders in real-time, anywhere you are.
                        </Card.Text>
                        <Button variant="warning" size="sm">Learn More</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default WhyUseOurSite;