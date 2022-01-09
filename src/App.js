import './App.scss';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="container text-center">
        <ItemListContainer />
      </section>
    </div>
  );
}

export default App;
