import { Link } from 'react-router-dom';
import graphic from '../../images/graphicdes.png';
import code from '../../images/code.png';
import lisboa from '../../images/lisboa2.png';

const AllSections = () => {
  return (
    <>
      <section className="allSections">
        <div className="pSection">
          <h2>Projects</h2>
          <p className="descriptionSection">
            Here you can find projects about web development, graphic design and
            photography
          </p>
        </div>

        <section className="projectImages">
          <div className="maquetationImg">
            <img src={code} alt="code img" className="imageOne" />
            <Link to="/WebDevelopment/">
              <p className="pGraphic">Web Development</p>
            </Link>
          </div>
          <div className="maquetationImg">
            <img src={graphic} alt="design img" className="imageOne" />
            <Link to="/GraphicDesign/">
              <p className="pGraphic">Graphic Design</p>
            </Link>
          </div>
          <div className="maquetationImg">
            <img src={lisboa} alt="photography img" className="imageOne" />
            <Link to="/Photography/">
              <p className="pGraphic">Photography</p>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default AllSections;
