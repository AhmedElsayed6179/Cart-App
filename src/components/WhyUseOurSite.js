import { Container, Row, Col, Card } from "react-bootstrap";

function WhyUseOurSite() {
    return (
        <Container className="py-5 my-5">
            <h2 className="text-center fw-bold mb-5">Why Use Our Site? 🤩</h2>
            <Row className="g-4">
                <Col md={4} className="mb-4">
                    <Card className="h-100 text-center border-0 rounded-4 p-3 hover-zoom" style={{ backgroundColor: "#e0f7fa" }}>
                        <Card.Body>
                            <i className="bi bi-speedometer2 display-4 text-primary mb-3"></i>
                            <Card.Title className="fw-bold">Fast & Intuitive</Card.Title>
                            <Card.Text className="text-dark">
                                Navigate easily and find your favorite products without hassle.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 text-center border-0 rounded-4 p-3 hover-zoom" style={{ backgroundColor: "#e8f5e9" }}>
                        <Card.Body>
                            <i className="bi bi-shield-lock-fill display-4 text-success mb-3"></i>
                            <Card.Title className="fw-bold">Secure & Reliable</Card.Title>
                            <Card.Text className="text-dark">
                                Your personal information is protected with top-notch security.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 text-center border-0 rounded-4 p-3 hover-zoom" style={{ backgroundColor: "#fff3e0" }}>
                        <Card.Body>
                            <i className="bi bi-truck display-4 text-warning mb-3"></i>
                            <Card.Title className="fw-bold">Fast Delivery</Card.Title>
                            <Card.Text className="text-dark">
                                Get your orders quickly and track them in real-time.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WhyUseOurSite;