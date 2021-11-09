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
          <form id="form" action="" className="form">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <label for="name">Email:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Email"
              required
            />
            <label for="name">Message:</label>
            <textarea id="message" name="message"></textarea>
            <a href="mailto:palomalogu9@gmail.com">Contactar</a>
            <button type="submit"></button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Contact;
