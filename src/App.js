import { Routes, Route } from 'react-router-dom';
import Home from "./Components/routes/Home/Home.component";
import NavBar from './Components/routes/Navigation/navigation-bar.component';
import Authentication from './Components/routes/Authentication/authentication.component';
import ShopPage from './Components/routes/Shop/shop.component';
import CheckoutPage from './Components/routes/Checkout/checkout.component';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
