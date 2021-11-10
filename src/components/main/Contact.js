import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import talk from '../../images/talk.jpg';
import linkedin from '../../icons/linkedin.png';
import gmail from '../../icons/gmail.png';
import github from '../../icons/github.png';

const Contact = () => {
  const [menu, setMenu] = useState(false);
  const handleMenuButton = (ev) => {
    ev.preventDefault();
    setMenu(!menu);
  };
  return (
    <>
      <Header menu={menu} handleMenuButton={handleMenuButton} />
      <section className="containterContact">
        <h2 className="letstalk">Let´s Talk!</h2>
        <img src={talk} alt="talk img" className="imgContact" />
        <div className="contactForm">
          <form
            className="form"
            action="https://formspree.io/f/mvodeprg"
            method="post"
          >
            <label for="Name" className="label">
              Name
            </label>
            <input
              placeholder="Write your name..."
              type="text"
              id="Name"
              name="Name"
              className="input"
              required
            />
            <label className="label" for="emailAddress">
              E-mail
            </label>
            <input
              placeholder="Write your E-mail..."
              type="email"
              id="emailAddress"
              name="emailAddress"
              className="input"
              required
            />
            <label for="message" className="label">
              Message
            </label>
            <textarea
              rows="20"
              cols="80"
              placeholder="Write your message"
              type="text"
              id="comments"
              name="comments"
              className="inputMessage"
              required
            ></textarea>
            <input type="submit" value="Send Message" className="sendbutton" />
          </form>
        </div>
        <section>
          <h4 className="titleSocial">Social Networks</h4>
          <div className="containerIcons">
            <a href="https://www.linkedin.com/in/paloma-lozano">
              <img src={linkedin} alt="linkedin" className="icons" />
            </a>
            <a href="mailto:palomalogu9@gmail.com">
              <img src={gmail} alt="gmail" className="icons" />
            </a>
            <a href="https://github.com/PalomaLozano">
              <img src={github} alt="github" className="icons" />
            </a>
          </div>
        </section>
        <p className="thank">Thank you!</p>
      </section>

      <Footer />
    </>
  );
};
export default Contact;
