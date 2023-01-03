import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/Navbar/Navbar';
import EjemploGreeting from './components/ItemList/ItemListContainer';
import Contador from './components/Contador/ItemCount';
function App() {
  return (
    <>
    <NavBar></NavBar>
    <EjemploGreeting Greeting="¡Bienvenido a mi tienda de Mates!"></EjemploGreeting>
    <div className="App">
      <header className="App-header">
      <Contador></Contador>
      </header>
    </div>
    </>
  );
}

export default App;
