import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from './App.jsx';
  import CategoryProduct from './pages/CategoryProduct.jsx';
  import Product from "./pages/Product.jsx";
  import Cart from "./pages/Cart.jsx";
const router = createBrowserRouter([
    {
      path:'/',
      element: <App />,
    },
  
    {
      path:'/categories/:category',
      element: <CategoryProduct />,
    },
    {
        path:'/product',
        element: <Product />,
      },
      {
      path:'/cart',
      element: <Cart />,
    },

    
  
  ])






export default router;