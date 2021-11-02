import Header from './Header';
import { useState } from 'react';
import Footer from './Footer';
import down from '../../images/down-arrow.png';
import Html from './html';

const Graphic = (props) => {
  const [menu, setMenu] = useState(false);
  const handleMenuButton = (ev) => {
    ev.preventDefault();
    setMenu(!menu);
  };

  return (
    <>
      <Header menu={menu} handleMenuButton={handleMenuButton} />
      <section className="allWeb">
        <p className="titleWeb">Graphic Design Projects</p>
        <div className="containerP">
          <p className="pWeb">
            This page is focused on projects I created with: Photoshop,
            Illustrator and InDesign.
          </p>
        </div>
        <section className="toggleCont">
          <p className="toggleP">Logotypes</p>
          <img
            src={down}
            alt="arrow"
            className="arrow"
            onClick={props.handleContent}
          />
        </section>
        <p>{props.content === true ? <Html /> : ''}</p>
      </section>
      <Footer />
    </>
  );
};
export default Graphic;
