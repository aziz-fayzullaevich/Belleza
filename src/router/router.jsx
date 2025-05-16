import ProductDetails from "../components/productDetails/ProductDetails";
import Cart from "../pages/cart/Cart";
import Favorites from "../pages/favorites/Favorites";
import Products from "../pages/products/Products";
import Register from "../pages/register/Register";

const routes = [
    {
        path: '/',
        element: <Products />
    },
    {
        path: '/favorites',
        element: <Favorites />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/product/:id',
        element: <ProductDetails />
    }
]

export default routes;