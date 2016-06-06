import uuid from 'node-uuid';
import React from 'react';
import Email from './Email.jsx'


export default class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     notes: [
  //       {
  //         id: uuid.v4(),
  //         task: 'info@yourdomain.com'
  //       }
  //     ]
  //   };
  // }

  render() {
    // const notes = this.state.notes;
    return (
      <div>
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
                    <li><i className="fa fa-phone"></i>
                      1 -234 -456 -7890
                    </li>
                    <li>
                      <Email />
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
