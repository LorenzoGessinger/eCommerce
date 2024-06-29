import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Shopping } from "../pages/Shopping/Shopping";
import { Blog } from "../pages/Blog/Blog";
import { Contact } from "../pages/Contact/Contact";
import { Collection } from "../pages/Collection/Collection";
import { Pagination } from "../pages/Pagination/Pagination";
import { BlogDetails } from "../pages/BlogDetails/BlogDetails";
import Checkout from "../components/Checkout/Checkout";
import Faq from "../pages/Faq/Faq";
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart"
import Products from "../components/Products/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/shopping",
        element: <Shopping />,
    },
    {
        path: "/products/:productId",
        element: <Products />
    },
    {
        path: "/collection",
        element: <Collection />
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/pagination",
        element: <Pagination />
    },
    {
        path: "/blogdetails",
        element: <BlogDetails />
    },
    {
        path: "/ShoppingCart",
        element: <ShoppingCart />
    },
    {
        path: "/checkout",
        element: <Checkout />
    },
    {
        path: "/Faq",
        element: <Faq />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/Register",
        element: <Register />
    },
    
])

export default router