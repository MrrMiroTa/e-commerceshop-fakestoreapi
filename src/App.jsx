import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'
import Sidebar from './components/Sidebar'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { useState } from 'react'
import Login from './loginpopup/Login'
function App() {
  const [showLogin, setLogin] = useState(false);
  return (
    
    <PayPalScriptProvider
    options={{"client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID}}
  >
    <Router> 
    {showLogin && <Login setLogin={setLogin} />}
    <Header setLogin= {setLogin} />
      <Sidebar />
      <Home/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/" element={<><Sidebar /></>} />
      </Routes>
      <Footer />
    </Router>
    </PayPalScriptProvider>
  );
}

export default App;
