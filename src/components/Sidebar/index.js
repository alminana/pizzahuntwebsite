import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Supreme</SidebarLink>
        <SidebarLink to='/'>Italian Sausage</SidebarLink>
        <SidebarLink to='/'>Pepperoni</SidebarLink>
        <SidebarLink to='/'>Berry, Arugula  Prosciutto Pizza</SidebarLink>
        <SidebarLink to='/'>Butternut Squash Pizza</SidebarLink>
        <SidebarLink to='/'>Buffalo Chicken Pizza Sticks</SidebarLink>
        <SidebarLink to='/'>Cantaloupe  Pizza</SidebarLink>
        <SidebarLink to='/'>Hummus  Pizzas</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};
export default Sidebar;
