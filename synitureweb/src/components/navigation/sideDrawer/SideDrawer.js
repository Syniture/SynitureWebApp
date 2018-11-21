import React from 'react';
import style from './SideDrawer.css';
import NavItems from '../navItems/NavItems.js';

const sideDrawer = (props) => {

  const activeClass = props.open ? style.open : style.close;
  const classes = [style.sideDrawer, activeClass].join(' ');

  return (
      <div className={classes}>

        <nav>
          <NavItems />
        </nav>

        <div className={style.logo}>
          AP
        </div>

      </div>
  );
};

export default sideDrawer;
