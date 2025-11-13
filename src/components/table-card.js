import { Button, Image } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../rtk/slices/cart-slice";
import { showDeleteAlert } from "./cart-alerts";

function TableCard() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handledeleteFromCart = (product) => {
        dispatch(deleteFromCart(product));
        showDeleteAlert(product);
    };

    return (
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
    )
}

export default TableCard;