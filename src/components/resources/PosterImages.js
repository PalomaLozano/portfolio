import imgPost2 from '../../imgPoster/cartelfo.png';
import imgPost3 from '../../imgPoster/cartel1.png';
import imgPost4 from '../../imgPoster/cartelGENERAL.jpg';
import imgPost5 from '../../imgPoster/extremadura3.jpg';
import imgPost6 from '../../imgPoster/flyer6.jpg';
import imgPost7 from '../../imgPoster/infog.jpg';
import imgPost8 from '../../imgPoster/portada.jpg';
import imgPost9 from '../../imgPoster/ribeirog.jpg';
import imgPost10 from '../../imgPoster/yoempre.png';
import imgPost11 from '../../imgPoster/yoga1.png';
import imgPost12 from '../../imgPoster/yoga2.png';
import imgPost13 from '../../imgPoster/cartel2.png';

const PosterImages = () => {
  return (
    <>
      <div className="divBox">
        <ul className="containerUl">
          <li>
            <img src={imgPost3} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={imgPost13} alt="img List" className="imagDes" />
          </li>

          <li>
            <img src={imgPost2} alt="img List" className="imagDes" />
          </li>
        </ul>
        <ul className="containerUl">
          <li>
            <img src={imgPost4} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={imgPost5} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={imgPost6} alt="img List" className="imagDes" />
          </li>
        </ul>
        <ul className="containerUl">
          <li>
            <img src={imgPost7} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={imgPost8} alt="img List" className="imagDes" />
          </li>

          <li>
            <img src={imgPost9} alt="img List" className="imagDes" />
          </li>
        </ul>
        <ul className="containerUl">
          <li>
            <img src={imgPost10} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={imgPost11} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={imgPost12} alt="img List" className="imagDes" />
          </li>
        </ul>
      </div>
    </>
  );
};
export default PosterImages;
