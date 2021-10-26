//import menuHamb from '../images/menuhamb.png';

const Header = (props) => {
  return (
    <header className="headerLine">
      <div className="menuhamb">
        {/*<img src={menuHamb} alt="menu" className="icon" />*/}
        <select onClick={props.handleMenuButton} className="selectMenu">
          <option value="Home" className="selectList">
            Home
          </option>
          <option value="Web Development" className="selectList">
            Web Dev
          </option>
          <option value="Graphic Design" className="selectList">
            Graphic Design
          </option>
          <option value="Photography" className="selectList">
            Photography
          </option>
          <option value="Contact" className="selectList">
            Contact
          </option>
        </select>
      </div>
    </header>
  );
};

export default Header;
