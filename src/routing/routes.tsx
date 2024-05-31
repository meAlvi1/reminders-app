import { createBrowserRouter } from "react-router-dom";
import Form from "../expense-tracker/Form";
import Cart_app from "../Cart";
import App from "../App";

const router = createBrowserRouter ([

    {path: "/", element: <App />},

    {path: "/form", element: <Form />},

    {path: "/cart", element: <Cart_app />}
    
]);

export default router