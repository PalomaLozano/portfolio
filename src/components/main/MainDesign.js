import Header from './Header';
import { useState } from 'react';
import Footer from './Footer';
import down from '../../images/down-arrow.png';
import graphic from '../../imgGraphic/graphic.jpg';
import GraphicDes from './graphic';
import Posters from './posters';

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
        <img src={graphic} alt="graphic design img" className="graphicImage" />
        <div className="containerP">
          <p className="pWeb">
            This page is focused on projects I created with: Photoshop,
            Illustrator and InDesign.
          </p>
        </div>
        <section className="toggleCont" onClick={props.handleContent}>
          <p className="toggleP">Illustrations</p>
          <img src={down} alt="arrow" className="arrow" />
        </section>
        <div>{props.content && <GraphicDes />}</div>

        <section className="toggleCont" onClick={props.handleContentJS}>
          <p className="toggleP">Posters</p>
          <img src={down} alt="arrow" className="arrow" />
        </section>
        <div>{props.contentJS && <Posters />}</div>
      </section>

      <Footer />
    </>
  );
};
export default Graphic;
