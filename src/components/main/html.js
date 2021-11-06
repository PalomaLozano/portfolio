import anom1 from '../../imageswebdev/anonim-mob.png';
import anom2 from '../../imageswebdev/anonim-mob2.png';
import anom3 from '../../imageswebdev/anonim-mob3.png';
import anom4 from '../../imageswebdev/anonim-desk.png';
import anom5 from '../../imageswebdev/anonim-desk2.png';

const Html = () => {
  return (
    <>
      <h4 className="anomP">Anonymous Proxy</h4>
      <p className="version">Mobile version</p>
      <section className="mobilesSection">
        <img src={anom1} alt="mobile" className="mobile"></img>
        <img src={anom2} alt="mobile" className="mobile"></img>
        <img src={anom3} alt="mobile" className="mobile"></img>
      </section>
      <p className="version">Desktop and tablet version</p>
      <section className="tabletSection">
        <img src={anom4} alt="desk" className="desk"></img>
        <img src={anom5} alt="desk" className="desk"></img>
      </section>
      <p className="descriptionProject">
        This project was the first I created with only HTML. It consists in
        doing a complete responsive maquetation for mobile, tablet and desktop.
        This page is oriented to be a blog where you can read articles of
        interest.
      </p>
    </>
  );
};
export default Html;
