import Header from './Header';
import React, { useState } from 'react';
import Footer from './Footer';
import down from '../../images/down-arrow.png';
import web from '../../imageswebdev/webdev.jpg';
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
            This page is focused on projects I created with:
            HTML-CSS-Sass-JavaScript-React-Node
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
        <p className="containerWeb">{props.content === true ? <Html /> : ''}</p>
        <section className="toggleCont">
          <p className="toggleP">JavaScript Projects</p>
          <img
            src={down}
            alt="arrow"
            className="arrow"
            onClick={props.handleContentJS}
          />
        </section>
        <p className="containerWeb">
          {props.contentJS === true ? <Javascript /> : ''}
        </p>

        <section className="toggleCont">
          <p className="toggleP">React Projects</p>
          <img
            src={down}
            alt="arrow"
            className="arrow"
            onClick={props.handleContentR}
          />
        </section>
        <p className="containerWeb">
          {props.contentR === true ? <ReactSection /> : ''}
        </p>
      </section>

      <Footer />
    </>
  );
};
export default WebDev;
