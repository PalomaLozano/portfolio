import line1 from '../../imgGraphic/line1.png';
import line2 from '../../imgGraphic/line2.png';
import line3 from '../../imgGraphic/line3.png';
import line4 from '../../imgGraphic/line4.png';
import line5 from '../../imgGraphic/line5.png';

const GraphicImages = () => {
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
export default GraphicImages;
