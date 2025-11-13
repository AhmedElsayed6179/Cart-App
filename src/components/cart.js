import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../rtk/slices/cart-slice";
import { CartisEmpty, showClearCartAlert } from "./cart-alerts";
import TableCard from "./table-card";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)

    const handleClearCart = () => {
        if (cart.length === 0) {
            CartisEmpty();
            return;
        }

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
            <TableCard />
        </Container>
    )
}

export default Cart;