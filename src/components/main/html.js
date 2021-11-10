import anom1 from '../../imageswebdev/anonim-mob.png';
import anom2 from '../../imageswebdev/anonim-mob2.png';
import anom3 from '../../imageswebdev/anonim-mob3.png';
import anom4 from '../../imageswebdev/anonim-desk.png';
import anom5 from '../../imageswebdev/anonim-desk2.png';
import cab1 from '../../imageswebdev/cabradesk.png';
import cab2 from '../../imageswebdev/cabradesk.png';
import cab3 from '../../imageswebdev/cabramob.png';
import cab4 from '../../imageswebdev/cabramob2.png';
import cab5 from '../../imageswebdev/cabramob3.png';

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
      <h4 className="anomP">Group Presentation</h4>
      <p className="version">Mobile version</p>
      <section className="mobilesSection">
        <img src={cab3} alt="mobile" className="mobile"></img>
        <img src={cab4} alt="mobile" className="mobile"></img>
        <img src={cab5} alt="mobile" className="mobile"></img>
      </section>
      <p className="version">Desktop and tablet version</p>
      <section className="tabletSection">
        <img src={cab1} alt="desk" className="desk"></img>
        <img src={cab2} alt="desk" className="desk"></img>
      </section>
      <p className="descriptionProject">
        This project was the first we build in group. It consists in a page
        where we introduce ourselfs, who we are, what we made, our strenghts and
        our weaknesses. Also, the page have links to our social networks.
      </p>
    </>
  );
};
export default Html;
