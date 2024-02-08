import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
