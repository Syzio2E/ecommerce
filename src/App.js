import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import ItemList from "./components/Layout/ItemList";

function App() {
  return (
    <div className="App">
    <Header/>
    <ItemList/>
    <button >See The Cart</button>
    <Footer/>
    </div>
  );
}

export default App;
