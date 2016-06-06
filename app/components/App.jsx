import uuid from 'node-uuid';
import React from 'react';
import Email from './Email.jsx'


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'info@yourdomain.com'
        }
      ]
    };
  }

  render() {
    const notes = this.state.notes;
    return (
      <div>
        <Email />
      </div>
    );
  }
}
