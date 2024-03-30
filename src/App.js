import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./Components/Utils/Firebase/firebase.utils";
import {
  setCurrentUser,
} from "./Components/Store/user/user-slice";
import ProfilePage from "./Components/routes/Profile/Profile.Component";
import Home from "./Components/routes/Home/Home.component";
import NavBar from "./Components/routes/Navigation/navigation-bar.component";
import Authentication from "./Components/routes/Authentication/authentication.component";
import ShopPage from "./Components/routes/Shop/shop.component";
import CheckoutPage from "./Components/routes/Checkout/checkout.component";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unSubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path={"auth"} element={<Authentication />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
