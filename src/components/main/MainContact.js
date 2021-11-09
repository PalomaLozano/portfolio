import { Link } from 'react-router-dom';
import go from '../../images/button_go.png';

const Contact = () => {
  return (
    <>
      <section className="maincontact">
        <h2 className="contact">Contact</h2>
        <p className="descriptionContact">
          If you are interested in do any collaboration with me or want more
          information I'll be glad to talk to you. Please, click the button
          below for contact me.
        </p>
        <Link to="/Contact/">
          <img src={go} alt="button" className="buttongo" />
        </Link>
      </section>
    </>
  );
};
export default Contact;
