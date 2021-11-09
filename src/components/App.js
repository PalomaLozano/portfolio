import '../styles/App.scss';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstView from './FirstView';
import Header from './main/Header';
import MainPage from './main/Main';
import Footer from './main/Footer';
import WebDev from './main/MainDevelopment';
import Graphic from './main/MainDesign';
import Photography from './main/MainPhotography';

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
    setContentJS(false);
    setContentR(false);
  };

  const handleContentJS = (ev) => {
    setContentJS(!contentJS);
    setContent(false);
    setContentR(false);
  };

  const handleContentR = (ev) => {
    setContentR(!contentR);
    setContent(false);
    setContentJS(false);
  };

  return (
    <>
      <Switch>
        <Route exact path="/Photography/">
          <section>
            <Photography
              content={content}
              contentJS={contentJS}
              contentR={contentR}
              handleContent={handleContent}
              handleContentJS={handleContentJS}
              handleContentR={handleContentR}
            />
          </section>
        </Route>
        <Route exact path="/GraphicDesign/">
          <section>
            <Graphic
              content={content}
              contentJS={contentJS}
              contentR={contentR}
              handleContent={handleContent}
              handleContentJS={handleContentJS}
              handleContentR={handleContentR}
            />
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
