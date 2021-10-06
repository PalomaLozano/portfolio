import { Route, Switch } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <header>
        <p>Menu</p>
        <p>Imagen</p>
      </header>
      <Switch>
        <Route exact path="/">
          <div>
            <h1>Hola mundo</h1>
          </div>
        </Route>
      </Switch>
      <footer>Logotipo</footer>
    </>
  );
};

export default MainPage;
