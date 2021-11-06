import menuHamb from '../../images/menuhamb.png';
import MenuHamb from '../resources/MenuHamb';

const Header = (props) => {
  console.log('hola');
  return (
    <header className="headerLine">
      <img
        src={menuHamb}
        alt="menu"
        className="icon"
        onClick={props.handleMenuButton}
      />

      <div className="menuhamb">{props.menu === true ? <MenuHamb /> : ''}</div>
    </header>
  );
};

export default Header;
