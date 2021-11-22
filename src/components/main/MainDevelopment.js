import Header from './Header';
import React, { useState } from 'react';
import Footer from './Footer';
import down from '../../images/down-arrow.png';
import web from '../../imageswebdev/web.png';
import Html from './html';
import Javascript from './javascript';
import ReactSection from './react';

const WebDev = (props) => {
  const [menu, setMenu] = useState(false);
  const handleMenuButton = (ev) => {
    ev.preventDefault();
    setMenu(!menu);
  };

  return (
    <>
      <Header menu={menu} handleMenuButton={handleMenuButton} />

      <section className="allWeb">
        <p className="titleWeb">Web Development Projects</p>
        <img src={web} alt="web>" className="imgweb" />
        <div className="containerP">
          <p className="pWeb">
            This page is focused on projects I created by myself and in group.
            The technologies used are: HTML-CSS-Sass-JavaScript-React-Node
          </p>
        </div>
        <section className="toggleCont">
          <p className="toggleP">HTML Projects</p>
          <img
            src={down}
            alt="arrow"
            className="arrow"
            onClick={props.handleContent}
          />
        </section>
        <div className="containerWeb">{props.content && <Html />}</div>
        <section className="toggleCont">
          <p className="toggleP">JavaScript Projects</p>
          <img
            src={down}
            alt="arrow"
            className="arrow"
            onClick={props.handleContentJS}
          />
        </section>
        <div className="containerWeb">{props.contentJS && <Javascript />}</div>

        <section className="toggleCont">
          <p className="toggleP">React Projects</p>
          <img
            src={down}
            alt="arrow"
            className="arrow"
            onClick={props.handleContentR}
          />
        </section>
        <div className="containerWeb">{props.contentR && <ReactSection />}</div>
      </section>

      <Footer />
    </>
  );
};
export default WebDev;
