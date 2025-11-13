import { Row, Col, Card, Button } from "react-bootstrap";

function ProductsList({ products, expanded, toggleDescription, handleAddToCart }) {
    return (
        <Row className="g-4">
            {products.map((product) => (
                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Card className="h-100 shadow-sm border-0 rounded-4 hover-zoom">
                        <div
                            className="d-flex justify-content-center align-items-center bg-light"
                            style={{ height: "250px" }}
                        >
                            <Card.Img
                                variant="top"
                                src={product.image}
                                style={{ width: "70%", height: "200px", objectFit: "contain" }}
                            />
                        </div>
                        <Card.Body className="text-center">
                            <Card.Title className="fw-semibold text-truncate">{product.title}</Card.Title>

                            <Card.Text className="text-muted small">
                                {expanded[product.id]
                                    ? product.description
                                    : product.description.slice(0, 60) + "..."}
                            </Card.Text>

                            <Button
                                variant="link"
                                size="sm"
                                className="text-decoration-none mb-3"
                                onClick={() => toggleDescription(product.id)}
                            >
                                {expanded[product.id] ? "Show Less" : "Read More"}
                            </Button>

                            <h5 className="fw-bold text-success mb-3">{product.price} $</h5>
                            <h6 className="mb-2">
                                <span className="fw-bold me-2">Category:</span>
                                <span className="badge bg-success text-white text-capitalize">
                                    {product.category}
                                </span>
                            </h6>
                            <h6 className="fw-bold text-warning mb-3">
                                Rating: {product.rating?.rate ?? "N/A"} ⭐ ({product.rating?.count ?? 0})
                            </h6>
                            <Button
                                variant="primary"
                                className="w-100 rounded-pill"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default ProductsList;