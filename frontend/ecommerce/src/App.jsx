import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminPanel from "./pages/AdminPanel";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin_panel" element={<AdminPanel />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/add_product" element={<AddProduct/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
