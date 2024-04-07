import './App.css';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import ProductDetail from '../Component/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      {/* <ProductDetail /> */}
      <Footer />
    </div>
  );
}

export default App;

