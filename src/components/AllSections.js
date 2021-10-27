import Footer from './Footer';
import Header from './Header';
import graphic from '../images/graphicdes.png';
import arrow from '../images/whitearrow.png';

const AllSections = () => {
  return (
    <>
      <Header />
      <section className="allSections">
        <div className="pSection">
          <p>Projects</p>
          <p className="descriptionSection">
            Here you can find projects about graphic design, web development and
            photography
          </p>
        </div>
        <img src={arrow} alt="arrow" className="arrow" />
        <section className="projectImages">
          <div className="maquetationImg">
            <img src={graphic} alt="design img" className="imageOne" />
            <p className="pGraphic">Graphic Design</p>
          </div>
          <div className="maquetationImg">
            <img src={graphic} alt="design img" className="imageOne" />
            <p className="pGraphic">Graphic Design</p>
          </div>
          <div className="maquetationImg">
            <img src={graphic} alt="design img" className="imageOne" />
            <p className="pGraphic">Graphic Design</p>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default AllSections;
