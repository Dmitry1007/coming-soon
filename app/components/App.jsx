import uuid from 'node-uuid';
import React from 'react';
import Email from './Email.jsx'
import Telephone from './Telephone.jsx'


export default class App extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo wow bounceInLeft" data-wow-delay="0.4s">
                <a className="site-logo" href="index.html">Ino Soon</a>
              </div>
            </div>
              <div className="col-sm-6">
                <ul className="contact-list wow bounceInRight" data-wow-delay="0.4s">
                  <li>
                    <Telephone />
                  </li>
                  <li>
                    <Email />
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </header>
    );
  }
}
