import { Container, Button, Image } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";
import { showClearCartAlert, showDeleteAlert } from "./cart-alerts";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)

    const handledeleteFromCart = (product) => {
        dispatch(deleteFromCart(product));
        showDeleteAlert(product);
    };

    const handleClearCart = () => {
        dispatch(clear());
        showClearCartAlert();
    };

    return (
        <Container className="py-5 text-center">
            <h1 className="fw-bold mb-3 mt-3 py-2">Welcome to Your Cart 🛒</h1>
            <h4 className="text-muted mb-4">
                You have{" "}
                <span className="text-primary fw-bold">{cart.length}</span>{" "}
                product{cart.length !== 1 ? "s" : ""}
            </h4>
            <Button className="mb-3 rounded-pill" size="lg" variant="primary" onClick={handleClearCart}>Clear Cart</Button>
            <h5 className="fw-bold mt-4 mb-4">
                Total Price: <span className="text-success">{totalPrice.toFixed(2)}$</span>
            </h5>
            <Table responsive striped bordered hover className="align-middle text-center">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Img</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td className="text-truncate" style={{ maxWidth: "150px" }}>
                                {product.title}
                            </td>
                            <td>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    style={{ width: "80px", height: "80px", objectFit: "contain" }}
                                    rounded
                                />
                            </td>
                            <td>{product.price}$</td>
                            <td>{product.quantity}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    className="rounded-pill"
                                    onClick={() => handledeleteFromCart(product)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Cart;