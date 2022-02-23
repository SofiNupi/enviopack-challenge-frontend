import './App.css';
import Catalog from './pages/Catalog';
import { CartProvider } from './hooks/useCart';
import Header from './components/Header';
import { UserProvider } from './hooks/useUser';
import { Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <header >

      </header>
      <div>
        <UserProvider>
          <CartProvider> 
            <Header />
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/checkout" element={<Checkout/>} />
            </Routes>
     
          </CartProvider>

        </UserProvider>

      </div>
    </div>
  );
}

export default App;
