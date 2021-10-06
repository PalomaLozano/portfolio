import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import FirstView from './FirstView';
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/home/">
          <header>
            <p>Menu</p>
            <p>Imagen</p>
          </header>
          <div>
            <h1>Hola mundo</h1>
          </div>
          <footer>Logotipo</footer>
        </Route>

        <Route exact path="/">
          <section className="firstView">
            <FirstView />
          </section>
        </Route>
      </Switch>
    </>
  );
}

export default App;
