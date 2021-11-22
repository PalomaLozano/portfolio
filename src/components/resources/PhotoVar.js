import line1 from '../../imgPhoto/absurd.png';
import line3 from '../../imgPhoto/parvati5.png';
import line4 from '../../imgPhoto/Balloons.jpg';
import line5 from '../../imgPhoto/desconnected2.jpg';
import line6 from '../../imgPhoto/EJEMPLO.png';
import line7 from '../../imgPhoto/garriher.jpg';
import line8 from '../../imgPhoto/open.jpg';
import line9 from '../../imgPhoto/pink.png';
import line10 from '../../imgPhoto/unisex.jpg';
import line11 from '../../imgPhoto/15min.png';

const PhotoImagesVar = () => {
  return (
    <>
      <div className="divBox">
        <ul className="containerUl">
          <li>
            <img src={line6} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={line8} alt="img List" className="imagDes" />
          </li>

          <li>
            <img src={line4} alt="img List" className="imagDes" />
          </li>
        </ul>
        <ul className="containerUl">
          <li>
            <img src={line3} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={line5} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={line9} alt="img List" className="imagDes" />
          </li>
        </ul>
        <ul className="containerUl">
          <li>
            <img src={line11} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={line7} alt="img List" className="imagDes" />
          </li>
        </ul>
        <ul className="containerUl">
          <li>
            <img src={line1} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={line10} alt="img List" className="imagDes" />
          </li>
        </ul>
      </div>
    </>
  );
};
export default PhotoImagesVar;
