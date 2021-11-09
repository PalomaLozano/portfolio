import line1 from '../../imgPhoto/ga1.png';
import line2 from '../../imgPhoto/ga2.png';
import line3 from '../../imgPhoto/ga3.png';
import line4 from '../../imgPhoto/OMG.png';
import line5 from '../../imgPhoto/OMG2.png';
import line6 from '../../imgPhoto/OMG3.png';
import line7 from '../../imgPhoto/OMG4.png';

const PhotoImagesTwo = () => {
  return (
    <>
      <div className="divBox">
        <ul className="containerUl">
          <li>
            <img src={line1} alt="img List" className="imagDes" />
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
            <img src={line4} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={line5} alt="img List" className="imagDes" />
          </li>

          <li>
            <img src={line6} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={line7} alt="img List" className="imagDes" />
          </li>
        </ul>
      </div>
    </>
  );
};
export default PhotoImagesTwo;
