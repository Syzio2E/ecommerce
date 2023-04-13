import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import ItemList from "./components/Layout/ItemList";
import About from "./Routes/About";

const router = createBrowserRouter([
  {path: '/about', element: <About/>},
])

function App() {
  return (
    <RouterProvider router={router}>
    <div className="App">
    <Header/>
    <ItemList/>
    <Footer/>
    </div>
    </RouterProvider>
  );
}

export default App;
