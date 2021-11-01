import '../styles/App.scss';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstView from './FirstView';
import Header from './main/Header';
import MainPage from './main/Main';
import Footer from './main/Footer';
import WebDev from './main/MainDevelopment';
import Graphic from './main/MainDesign';
import Photography from './main/MainDesign';

function App() {
  const [menu, setMenu] = useState(false);
  const [content, setContent] = useState(false);
  const [contentJS, setContentJS] = useState(false);
  const [contentR, setContentR] = useState(false);

  const handleMenuButton = (ev) => {
    ev.preventDefault();
    setMenu(!menu);
  };

  const handleContent = (ev) => {
    setContent(!content);
  };

  const handleContentJS = (ev) => {
    setContentJS(!contentJS);
  };

  const handleContentR = (ev) => {
    setContentR(!contentR);
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
            <WebDev
              content={content}
              contentJS={contentJS}
              contentR={contentR}
              handleContent={handleContent}
              handleContentJS={handleContentJS}
              handleContentR={handleContentR}
            />
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
