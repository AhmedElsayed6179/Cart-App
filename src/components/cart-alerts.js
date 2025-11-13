import Swal from 'sweetalert2'

export const showDeleteAlert = (product) => {
    Swal.fire({
        title: "Removed from Cart 🗑️",
        text: `${product.title} has been removed successfully!`,
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
    });
};

export const showClearCartAlert = () => {
    Swal.fire({
        title: "Cart Cleared 🗑️",
        text: "All products have been removed successfully!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
    });
};

export const showAddToCartAlert = (product) => {
    Swal.fire({
        title: "Added to Cart 🛒",
        text: `${product.title} has been added successfully!`,
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
    });
};

export const showComingSoon = (product) => {
    Swal.fire({
        title: "Coming Soon 🚧",
        icon: "info",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
    });
};