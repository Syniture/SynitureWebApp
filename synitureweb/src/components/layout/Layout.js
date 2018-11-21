import React from 'react';
import SideDrawer from '../navigation/sideDrawer/SideDrawer.js';
import Navbar from '../navigation/navBar/NavBar';


class Layout extends React.Component {
  render() {
    return (

      <React.Fragment>
        <Navbar />
          {this.props.children}
      </React.Fragment>

    )
  }
}

export default Layout;
