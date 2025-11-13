import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart-slice';
import { showAddToCartAlert } from './cart-alerts';

function Products() {
    const products = useSelector((state) => state.products);

    const categories = [...new Set(products.map(p => p.category))];

    const [expanded, setExpanded] = useState({});

    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(p => p.category === selectedCategory);

    const toggleDescription = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        showAddToCartAlert(product);
    };

    return (
        <Container className="py-5">
            <h2 className="text-center fw-bold mb-5 mt-5">Our Products 🛍️</h2>
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
                <Button
                    variant={selectedCategory === "all" ? "primary" : "outline-primary"}
                    onClick={() => setSelectedCategory("all")}
                >
                    All
                </Button>

                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={selectedCategory === cat ? "primary" : "outline-primary"}
                        onClick={() => setSelectedCategory(cat)}
                        className="text-capitalize"
                    >
                        {cat}
                    </Button>
                ))}
            </div>
            <Row className="g-4">
                {filteredProducts.map((product) => (
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
        </Container>
    );
}

export default Products;