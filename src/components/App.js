import '../styles/App.scss';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstView from './FirstView';
import Header from './Header';
import MainPage from './Main';
import Footer from './Footer';

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
          <section className="headerLine">
            <Header menu={menu} handleMenuButton={handleMenuButton} />
          </section>
          <section className="mainPage">
            <MainPage />
          </section>
          <section>
            <Footer className="footer" />
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
