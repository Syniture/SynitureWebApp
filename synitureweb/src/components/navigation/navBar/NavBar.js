import React from 'react';

import style from './NavBar.css';

import DrawerToggle from '../drawerToggle/DrawerToggle';
import NavItems from '../navItems/NavItems';

const navBar = (props) => (
  <header className={style.toolbar}>
    <div className={style.logo}>
        Syniture
    </div>
    <div className={style.mobileNav}>
      <DrawerToggle clicked={props.toggleMenu} />
    </div>
    <nav className={style.desktopNav}>
      <NavItems />
    </nav>
  </header>
);

export default navBar;
