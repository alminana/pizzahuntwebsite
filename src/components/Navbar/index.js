import React from 'react';
import { Nav, NavLink, NavIcon, Bars} from './NavbarElements';
import ImgBg from '../../images/pizza-3.jpg';
const Navbar = ({ toggle }) => {
  return (
    <div className="container">
      <Nav>
        <NavLink to='/'>
       Pizza Hut 
        </NavLink>
 
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  );
};

export default Navbar;