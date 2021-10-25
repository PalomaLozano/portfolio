import { Link } from 'react-router-dom';
import SlideImage from './SlideImage';

const FirstView = () => {
  return (
    <>
      <section className="firstView__image">
        <h1 className="firstView__portfolio">Portfolio</h1>
        <p className="firstView__p">By Paloma.logu</p>
        <section>
          <SlideImage></SlideImage>
        </section>
        <button className="firstView__btn">
          <Link to="/home/">
            <p className="firstView__look">Take a look</p>
          </Link>
        </button>
      </section>
    </>
  );
};
export default FirstView;
