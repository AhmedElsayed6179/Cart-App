import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <Container className="py-5">
            <Row className="align-items-center text-center text-md-start">
                <Col md={6} className="mb-4 mb-md-0">
                    <h1 className="fw-bold mb-3">
                        Welcome to <span className="text-primary">CartApp</span> 🛒
                    </h1>
                    <p className="text-muted fs-5 mb-4">
                        Discover amazing products at unbeatable prices. Add your favorites
                        to the cart and enjoy an effortless shopping experience!
                    </p>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => navigate("/products")}
                    >
                        Explore Products
                    </Button>
                </Col>
                <Col md={6}>
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                        alt="Shopping illustration"
                        fluid
                        className="rounded-4 shadow-lg mt-5"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;