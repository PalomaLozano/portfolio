import line1 from '../../imgPhoto/puente.png';
import line2 from '../../imgPhoto/puente2.png';
import line3 from '../../imgPhoto/puente3.png';
import line4 from '../../imgPhoto/puente4.png';
import line5 from '../../imgPhoto/puente5.png';

const PhotoImages = () => {
  return (
    <>
      <div className="divBox">
        <ul className="containerUl">
          <li>
            <img src={line5} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={line2} alt="img List" className="imagDes" />
          </li>

          <li>
            <img src={line3} alt="img List" className="imagDes" />
          </li>
        </ul>
        <ul className="containerUl">
          <li>
            <img src={line1} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={line4} alt="img List" className="imagDes" />
          </li>
        </ul>
      </div>
    </>
  );
};
export default PhotoImages;
