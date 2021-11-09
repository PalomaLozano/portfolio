import line1 from '../../imgPhoto/ja1.png';
import line2 from '../../imgPhoto/ja2.png';
import line3 from '../../imgPhoto/jad1.png';
import line4 from '../../imgPhoto/jad2.png';

const PhotoImagesThree = () => {
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
          <li>
            <img src={line4} alt="img List" className="imagDes" />
          </li>
        </ul>
      </div>
    </>
  );
};
export default PhotoImagesThree;
