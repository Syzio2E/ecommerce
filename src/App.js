import { useState } from "react";
import About from "./Routes/About";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import ContactUs from "./components/Layout/ContactUs";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import ItemList from "./components/Layout/ItemList";
import Cart from "./components/Layout/Cart";
import CartProvider from "./components/Shop/CartProvider";
import Home from "./components/Layout/Home";
import ProductDetail from "./components/Layout/ProductDetail";
import Login from "./components/Layout/Login";


const router = [
  { path: "/home", element: <Home /> },
  { path: "/store", element: <ItemList /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <ContactUs /> },
  {
    path: "/:id",
    element: <ProductDetail />,
    render: ({ match }) => <ProductDetail title={match.params.id} />,
  },
  {path: '/',element:<Login/>}
];

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Router>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Routes>
          {router.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
