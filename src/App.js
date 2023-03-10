import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailCointainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar></NavBar>
      <Routes>
        <Route className="App-header" path="/" element={<ItemListContainer/>}></Route>
        <Route path="/categoria/:categoria" element={<ItemListContainer/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path='/Item/:id' element={<ItemDetailContainer/>}></Route>
      </Routes>
    </CartProvider>
      <Footer></Footer>
    </BrowserRouter>
    {/* <div className="App">
      <header className="App-header"> */}
      {/* <ItemListContainer></ItemListContainer> */}
      {/* </header>
    </div> */}
    </>
  );
}

export default App;
