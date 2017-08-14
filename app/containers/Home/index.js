/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <div className="navbar">Site Name
          <a href ="#" class class="w3-bar-item w3-button w3-mobile">Link 1</a>
        </div>

        <h1>Hello</h1>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
