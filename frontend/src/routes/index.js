import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import ForgotPassword from '../pages/ForgotPassword'
import { Home } from '../pages/Home'
import Payment from '../components/Payment'
import PaymentSuccess from '../pages/PaymentSuccess'
import PaymentCancel from '../pages/PaymentCancel'
import OrderPage from '../pages/OrderPage'
import AllOrder from '../pages/AllOrder'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "product-category",
                element: <CategoryProduct />
            },
            {
                path: "product/:id",
                element: <ProductDetails />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'success',
                element: <PaymentSuccess />
            },
            {
                path: 'cancel',
                element: <PaymentCancel />
            },
            {
                path: "search",
                element: <SearchProduct />
            },
            {
                path: "order",
                element: <OrderPage />
            },


            {
                path: "admin-panel",
                element: <AdminPanel />,
                children: [
                    {
                        path: "all-users",
                        element: <AllUsers />
                    },
                    {
                        path: "all-products",
                        element: <AllProducts />
                    },
                    {
                        path: "all-orders",
                        element: <AllOrder />
                    },

                ]
            },
        ]
    }
])


export default router