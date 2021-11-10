import ilu6 from '../../imgGraphic/bauhaus.png';
import ilu4 from '../../imgGraphic/refugiadosam3.jpg';
import ilu3 from '../../imgGraphic/AUTO.jpg';
import ilu from '../../imgGraphic/portfdiseño.jpg';
import ilu2 from '../../imgGraphic/8mmm.jpg';
import ilu5 from '../../images/logotipo-fin.png';

const Variety = () => {
  return (
    <>
      <div className="divBox">
        <ul className="containerUl">
          <li>
            <img src={ilu} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={ilu2} alt="img List" className="imagDes" />
          </li>

          <li>
            <img src={ilu3} alt="img List" className="imagDes" />
          </li>
        </ul>
        <ul className="containerUl">
          <li>
            <img src={ilu4} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={ilu5} alt="img List" className="imagDes" />
          </li>
          <li>
            <img src={ilu6} alt="img List" className="imagDes" />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Variety;
