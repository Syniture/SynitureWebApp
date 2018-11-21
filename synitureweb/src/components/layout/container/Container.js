import React from 'react';
import style from './Container.css'

const container = (props) => (

  <div className={props.large ? style.large : style.normal}>
      {props.children}
  </div>
  
);

export default container;
