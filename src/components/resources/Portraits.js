import Zmage from 'react-zmage';
import ilu from '../../imgGraphic/ilu.png';
import ilu2 from '../../imgGraphic/ilu2.png';
import ilu3 from '../../imgGraphic/ilu3.png';

const PortraitImages = () => {
  return (
    <>
      <div className="divBox">
        <ul className="containerUl">
          <li>
            <Zmage src={ilu} alt="img List" className="imagDes" />
          </li>
          <li>
            <Zmage src={ilu2} alt="img List" className="imagDes" />
          </li>

          <li>
            <Zmage src={ilu3} alt="img List" className="imagDes" />
          </li>
        </ul>
      </div>
    </>
  );
};
export default PortraitImages;
