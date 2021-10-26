import '../styles/App.scss';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstView from './FirstView';
import Header from './Header';
import MainPage from './Main';

function App() {
  const [menu, setMenu] = useState('');
  console.log(menu);

  const handleMenuButton = (ev) => {
    ev.preventDefault();
    setMenu(ev.currentTarget.value);
  };
  return (
    <>
      <Switch>
        <Route exact path="/home/">
          <section className="mainPage">
            <div className="headerLine">
              <Header menu={menu} handleMenuButton={handleMenuButton} />
              <MainPage />
            </div>
          </section>
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
