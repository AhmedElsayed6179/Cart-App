import { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";
import { showAddToCartAlert } from "./cart-alerts";
import ProductsList from "./productsList";

function Products() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [loading, setLoading] = useState(true);

    const categories = [...new Set(products.map(p => p.category))];

    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    const toggleDescription = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        showAddToCartAlert(product);
    };

    useEffect(() => {
        setLoading(true);
        dispatch(fetchProducts()).finally(() => setLoading(false));
    }, [dispatch]);

    if (loading) {
        return (
            <Container className="py-5 text-center mt-5">
                <Spinner
                    animation="border"
                    variant="primary"
                    role="status"
                    style={{ width: "4rem", height: "4rem" }}
                >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p className="mt-3 fw-bold">Loading Products...</p>
            </Container>
        );
    }

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

            <ProductsList
                products={filteredProducts}
                expanded={expanded}
                toggleDescription={toggleDescription}
                handleAddToCart={handleAddToCart}
            />
        </Container>
    );
}

export default Products;
