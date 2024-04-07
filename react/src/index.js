import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routs/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './Component/LandingPage/LandingPage'
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import CreateProduct from './Component/CreateProduct/CreateProduct';
import ProductList from './Component/ProductList/ProductList'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductDetail from './Component/ProductDetails/ProductDetails';

const router = createBrowserRouter([

  {
    path: '/', element: <App />,
    children: [
      { path: '/SignUp', element: <SignUp /> },
      { path: '/SignIn', element: <SignIn /> },
      { path: '/CreateProduct', element: <CreateProduct /> },
      { path: '/LandingPage', element: <LandingPage /> },
      { path: '/ProductList', element: <ProductList /> },
      { path: '/productDetails', element: <ProductDetail /> },

    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
