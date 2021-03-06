import Header from './Header';
import { useState } from 'react';
import Footer from './Footer';
import down from '../../images/down-arrow.png';
import mainfoto from '../../imgPhoto/photofondo.png';
import PhotographyPage from './photography';
import PhotoVar from './photovariety';

const Photography = (props) => {
  const [menu, setMenu] = useState(false);
  const handleMenuButton = (ev) => {
    ev.preventDefault();
    setMenu(!menu);
  };

  return (
    <>
      <Header menu={menu} handleMenuButton={handleMenuButton} />

      <section className="allWeb">
        <p className="titleWeb">Photography Projects</p>
        <img src={mainfoto} alt="graphic design img" className="graphicImage" />
        <div className="containerP">
          <p className="pWeb">
            This page is focused on projects I created with: Photoshop,
            Illustrator and Lightroom.
          </p>
        </div>
        <section className="toggleCont" onClick={props.handleContent}>
          <p className="toggleP">Photographies</p>
          <img src={down} alt="arrow" className="arrow" />
        </section>
        <div>{props.content && <PhotographyPage />}</div>

        <section className="toggleCont" onClick={props.handleContentJS}>
          <p className="toggleP">Variety</p>
          <img src={down} alt="arrow" className="arrow" />
        </section>
        <div>{props.contentJS && <PhotoVar />}</div>
      </section>

      <Footer />
    </>
  );
};
export default Photography;
