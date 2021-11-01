import org from '../../imageswebdev/orgmob.png';
import org1 from '../../imageswebdev/orgmob2.png';
import org2 from '../../imageswebdev/orgmob3.png';
import org3 from '../../imageswebdev/org.png';
import org4 from '../../imageswebdev/org2.png';
import rick from '../../imageswebdev/rickmob.png';
import rick1 from '../../imageswebdev/rickmob2.png';
import rick2 from '../../imageswebdev/rickmob3.png';
import rick3 from '../../imageswebdev/rick.png';
import rick4 from '../../imageswebdev/rick2.png';

const ReactSection = () => {
  return (
    <>
      <p className="anomP">Organizer</p>
      <p className="version">Mobile version</p>
      <section className="mobilesSection">
        <img src={org} alt="mobile" className="mobile"></img>
        <img src={org1} alt="mobile" className="mobile"></img>
        <img src={org2} alt="mobile" className="mobile"></img>
      </section>
      <p className="version">Desktop and tablet version</p>
      <section className="tabletSection">
        <img src={org3} alt="desk" className="desk"></img>
        <img src={org4} alt="desk" className="desk"></img>
      </section>
      <p className="descriptionProject">
        This project is responsive so you can view your notelist where do you
        want. It´s an organizer where you can create notes and delete notes.
        Also you can put your note checked as urgent or even on weekends, or
        check both at the same time, depending on the prioritazion you want.
      </p>
      <a
        href=" http://beta.adalab.es/modulo-3-evaluacion-intermedia-PalomaLozano/"
        className="linkWeb"
        target="-blank"
      >
        Link
      </a>
      <p className="anomP">Rick and Morty</p>
      <p className="version">Mobile version</p>
      <section className="mobilesSection">
        <img src={rick} alt="mobile" className="mobile"></img>
        <img src={rick1} alt="mobile" className="mobile"></img>
        <img src={rick2} alt="mobile" className="mobile"></img>
      </section>
      <p className="version">Desktop and tablet version</p>
      <section className="tabletSection">
        <img src={rick3} alt="desk" className="desk"></img>
        <img src={rick4} alt="desk" className="desk"></img>
      </section>
      <p className="descriptionProject">
        This project is responsive so you can view this list where do you want.
        It´s a Rick and Morty character´s list, with the help of an API, we have
        a list with the principal characters, who they are, where they live, if
        they are humans or aliens and in what chapter they appear.
      </p>
      <a
        href="http://beta.adalab.es/modulo-3-evaluacion-final-PalomaLozano/#/"
        className="linkWeb"
        target="-blank"
      >
        Link
      </a>
      <p className="welcome">This portfolio is created with React!</p>
    </>
  );
};
export default ReactSection;
