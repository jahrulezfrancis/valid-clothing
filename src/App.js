import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { createUserDocumentFromAuth, fetchTransactionHistory, onAuthStateChangedListener } from "./Components/Utils/Firebase/firebase.utils";
import { setCurrentUser } from './Components/Store/user/user-slice';
import ProfilePage from './Components/routes/Profile/Profile';
import Home from "./Components/routes/Home/Home.component";
import NavBar from './Components/routes/Navigation/navigation-bar.component';
import Authentication from './Components/routes/Authentication/authentication.component';
import ShopPage from './Components/routes/Shop/shop.component';
import CheckoutPage from './Components/routes/Checkout/checkout.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from './Components/Store/user/userSelector';


function App() {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const uID = currentUser ? currentUser.uid : ''

  useEffect(() => {
    fetchTransactionHistory(uID)
    .then((transactions) => {
      console.log(transactions)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [uID])


  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })    
    return unSubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
