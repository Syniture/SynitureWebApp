import React from 'react';
import style from './NavItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {

  return (
    <li className={style.navItem}>
      <NavLink
        to={props.link}
        exact
        activeClassName={style.active}>
        {props.children}
      </NavLink>
    </li>
  )

};

export default navigationItem;
