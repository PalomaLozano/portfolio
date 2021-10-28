import '../styles/App.scss';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstView from './FirstView';
import Header from './Header';
import MainPage from './Main';
import Footer from './Footer';
import AllSections from './AllSections';
import WebDev from './MainDevelopment';
import Graphic from './MainDesign';
import Photography from './MainDesign';

function App() {
  const [menu, setMenu] = useState(false);
  const [content, setContent] = useState(false);

  const handleMenuButton = (ev) => {
    ev.preventDefault();
    setMenu(!menu);
  };

  const handleContent = (ev) => {
    setContent(!content);
  };

  return (
    <>
      <Switch>
        <Route exact path="/Photography/">
          <section>
            <Photography />
          </section>
        </Route>
        <Route exact path="/GraphicDesign/">
          <section>
            <Graphic />
          </section>
        </Route>
        <Route exact path="/WebDevelopment/">
          <section>
            <WebDev content={content} handleContent={handleContent} />
          </section>
        </Route>
        <Route exact path="/All/">
          <section>
            <AllSections />
          </section>
        </Route>
        <Route exact path="/Home/">
          <section className="headerLine">
            <Header menu={menu} handleMenuButton={handleMenuButton} />
          </section>
          <section className="mainPage">
            <MainPage />
          </section>
          <section>
            <Footer />
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
