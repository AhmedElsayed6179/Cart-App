import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart-slice';

function Products() {
    const products = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <Container className="py-5">
            <h2 className="text-center fw-bold mb-5 mt-5">🛍️ Our Products</h2>
            <Row className="g-4">
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="h-100 shadow-sm border-0 rounded-4 hover-zoom">
                            <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: "250px" }}>
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    style={{ width: "70%", height: "200px", objectFit: "contain" }}
                                />
                            </div>
                            <Card.Body className="text-center">
                                <Card.Title className="fw-semibold text-truncate">{product.title}</Card.Title>
                                <Card.Text className="text-muted small">
                                    {product.description.slice(0, 60)}...
                                </Card.Text>
                                <h5 className="fw-bold text-success mb-3">{product.price} $</h5>
                                <Button
                                    variant="primary"
                                    className="w-100 rounded-pill"
                                    onClick={() => dispatch(addToCart(product))}
                                >
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;