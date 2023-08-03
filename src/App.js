import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/routes/Home/Home.component";
import NavBar from './Components/routes/Navigation/navigation-bar.component';
import Signin from './Components/routes/Sign-in/sign-in.component';


const Shop = () => {
  return (
    <h2>Shop page</h2>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<Signin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
