import SlideImage from '../resources/SlideImage';
import AllSections from './AllSections';
import arrow from '../../images/down-arrow.png';

const MainPage = () => {
  return (
    <>
      <main>
        <div className="welcome">
          <h2>Welcome!</h2>
        </div>

        <section className="descriptionSection">
          <section className="slideImage">
            <SlideImage />
          </section>
          <div className="description">
            <p>
              I´m Paloma Lozano, Front-End Developer and Graphic Designer. I
              will start by the beginning: Since I was a child I´d love painting
              and taking photographs, then, in my adolescense, I started to
              learn programs of edition and desing. I started my career in a
              School of Art where I learned design, photography and the basics
              of web development, years later, I decided to be more involved
              with web development and mix both. Here you can see all of my
              projects.
            </p>
          </div>
          <img src={arrow} alt="arrow" className="arrowMain" />
        </section>
        <AllSections />
      </main>
    </>
  );
};

export default MainPage;
