import { Link } from 'react-router-dom';

const MenuHamb = () => {
  return (
    <nav className="navMenu">
      <ul className="selectMenu">
        <Link to="/Home/">
          <li value="Home" className="selectList">
            Home
          </li>
        </Link>
        <Link to="/WebDevelopment/">
          <li value="Web Dev" className="selectList">
            Web Development
          </li>
        </Link>
        <Link to="/GraphicDesign/">
          <li value="Graphic Design" className="selectList">
            Graphic Design
          </li>
        </Link>
        <Link to="/Photography/">
          <li value="Photography" className="selectList">
            Photography
          </li>
        </Link>

        <Link to="/Contact/">
          <li value="Contact" className="selectList">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export default MenuHamb;
