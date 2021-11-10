import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import talk from '../../images/talk.jpg';

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
            />
            <label for="message" className="label">
              Message
            </label>
            <input
              placeholder="Write your message"
              type="text"
              id="comments"
              name="comments"
              size="15"
              maxlength="100"
              className="inputMessage"
            />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Contact;
