import guess from '../../imageswebdev/guess.png';
import tv from '../../imageswebdev/tv.png';
import JS from '../../imageswebdev/javasmob.png';
import JS1 from '../../imageswebdev/javas2mob.png';
import JS2 from '../../imageswebdev/javas3mob.png';
import JS3 from '../../imageswebdev/javas.png';
import JS4 from '../../imageswebdev/javas2.png';

const Javascript = () => {
  return (
    <>
      <p className="anomP">Guess the number</p>
      <p className="version">Desktop version</p>
      <section className="tabletSection">
        <img src={guess} alt="desk" className="desk"></img>
      </section>
      <p className="descriptionProject">
        This project it´s created only for desktop. It´s a game where you have
        to guess the number. This is programmed with JavaScript, where I
        programed a random number for the result and also, every time the try
        button is clicked, the background color changes.
      </p>
      <a
        href="http://beta.adalab.es/modulo-2-evaluacion-intermedia-PalomaLozano/"
        className="linkWeb"
        target="-blank"
      >
        Link
      </a>

      <p className="anomP">TV Shows</p>
      <p className="version">Desktop version</p>
      <section className="tabletSection">
        <img src={tv} alt="desk" className="desk"></img>
      </section>
      <p className="descriptionProject">
        This project it´s created only for desktop. It´s a shows list where you
        have an input for search a TV Show and when yoou click in any show, this
        will go to the favorites shows section. Also, if you click again in the
        same show, you will remove it from the favorites list.
      </p>
      <a
        href="http://beta.adalab.es/modulo-2-evaluacion-final-PalomaLozano/"
        className="linkWeb"
        target="-blank"
      >
        Link
      </a>
      <p className="anomP">JavaScript Project</p>
      <p className="version">Mobile version</p>
      <section className="mobilesSection">
        <img src={JS} alt="mobile" className="mobile"></img>
        <img src={JS1} alt="mobile" className="mobile"></img>
        <img src={JS2} alt="mobile" className="mobile"></img>
      </section>
      <p className="version">Desktop and tablet version</p>
      <section className="tabletSection">
        <img src={JS3} alt="desk" className="desk"></img>
        <img src={JS4} alt="desk" className="desk"></img>
      </section>
      <p className="descriptionProject">
        This project is a shows list where you have an input for search a TV
        Show and when yoou click in any show, this will go to the favorites
        shows section. Also, if you click again in the same show, you will
        remove it from the favorites list. It´s under construction.
      </p>
      <a
        href=" https://palomalozano.github.io/Javascript-Project/page1.html"
        className="linkWeb"
        target="-blank"
      >
        Link
      </a>
    </>
  );
};
export default Javascript;
