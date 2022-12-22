import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/Navbar';
import EjemploGreeting from './components/ItemListContainer';
function App() {
  return (
    <>
    <NavBar></NavBar>
    <EjemploGreeting Greeting="¡Bienvenido a mi tienda de Mates!"></EjemploGreeting>
    <div className="App">
      <header className="App-header">
      </header>
    </div>
    </>
  );
}

export default App;
